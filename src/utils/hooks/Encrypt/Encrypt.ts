import * as forge from 'node-forge';

type ByteStringBuffer = forge.util.ByteStringBuffer;
type Bytes = ByteStringBuffer | string | void;
// Generate RSA Key Pair (2048 bits)
interface AesGcmEncryptProps {
  aesKey: forge.util.ByteStringBuffer;
  iv: forge.util.ByteStringBuffer;
  payload: string;
}
export const useEncrypt = (publicKey: string) => {
  const aesGcmEncrypt = ({
    aesKey,
    iv,
    payload,
  }: AesGcmEncryptProps): string => {
    const cipher = forge.cipher.createCipher('AES-GCM', aesKey);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(payload, 'utf8'));
    cipher.finish();
    const encryptedData = cipher.output.getBytes();
    const tag = cipher.mode.tag?.getBytes();
    return forge.util.encode64(iv.getBytes() + encryptedData + tag);
  };

  const encrypt = (payload: string) => {
    const aesKey = forge.random.getBytes(32) as Bytes;
    const ivBytes = forge.random.getBytes(12) as Bytes;

    const aesKeyBuffer = forge.util.createBuffer(aesKey as ByteStringBuffer);
    const ivBuffer = forge.util.createBuffer(ivBytes as ByteStringBuffer);
    const encryptedData = aesGcmEncrypt({
      aesKey: aesKeyBuffer,
      iv: ivBuffer,
      payload,
    });

    const key = forge.pki.publicKeyFromPem(publicKey);
    const rsaEncryptedKey = key.encrypt(aesKey as string, 'RSA-OAEP');
    const rsaEncryptedKeyHex = forge.util.bytesToHex(rsaEncryptedKey);
    return JSON.stringify({ data: encryptedData, key: rsaEncryptedKeyHex });
  };
  return encrypt;
};

export default useEncrypt;
