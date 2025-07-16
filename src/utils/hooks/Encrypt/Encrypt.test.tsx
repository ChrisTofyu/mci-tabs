import { useEncrypt } from './Encrypt';
import * as forge from 'node-forge';

describe('useEncrypt', () => {
  let publicKeyPem: string;

  beforeAll(() => {
    // Generate RSA key pair (2048 bits) for test
    const keypair = forge.pki.rsa.generateKeyPair(2048);
    publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
  });

  it('should return encrypted data and encrypted AES key', () => {
    const encrypt = useEncrypt(publicKeyPem);
    const payload = JSON.stringify({
      name: 'username',
      email: 'useremail@gmail.com',
    });

    const result = encrypt(payload);

    expect(typeof result).toBe('string');

    const parsed = JSON.parse(result);
    expect(parsed).toHaveProperty('data');
    expect(parsed).toHaveProperty('key');

    // Base64 string
    expect(typeof parsed.data).toBe('string');
    expect(parsed.data).toMatch(/^[A-Za-z0-9+/=]+$/);

    // Hex string
    expect(typeof parsed.key).toBe('string');
    expect(parsed.key).toMatch(/^[a-fA-F0-9]+$/);
  });

  it('should throw if public key is invalid', () => {
    const invalidKey =
      '-----BEGIN PUBLIC KEY-----\nINVALIDKEY\n-----END PUBLIC KEY-----';
    const encrypt = useEncrypt(invalidKey);
    expect(() => encrypt('test')).toThrow();
  });
});
