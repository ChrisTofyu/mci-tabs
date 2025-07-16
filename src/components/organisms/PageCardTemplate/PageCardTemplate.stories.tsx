import React from 'react';
import PageCardTemplate from './PageCardTemplate';
import { Meta, StoryObj } from '@storybook/react';
import Greetings from '@components/molecules/Greetings/Greetings';
import LoginForm from '@components/molecules/LoginForm';
import FormFooter from '@components/molecules/FormFooter/FormFooter';
import UserDetailsForm from '@components/molecules/UserDetailsForm';
import ProgressBar from '@radix-styles/atoms/ProgressBar';
import Heading from '@radix-styles/atoms/Heading';
import { getStylesAsCssProperties } from '@utils/common/styles';
import Flex from '@radix-styles/atoms/Flex';
import Text from '@radix-styles/atoms/Text';
import PaymentForm from '@components/molecules/PaymentForm';
import Link from '@radix-styles/atoms/Link';
import CalloutMolecule from '@radix-styles/molecules/Callout';
import Box from '@radix-styles/atoms/Box';
import Image from '@components/atoms/Image';
import FallbackImage from '@assets/images/FallbackImage.svg';
import Button from '@radix-styles/atoms/Button';
import PasswordVerificationForm from '@components/molecules/PasswordVerificationForm';
import ButtonGroup from '@radix-styles/molecules/ButtonGroup';
import PartnerLogo from '@components/molecules/PartnerLogo';

const meta = {
  title: 'Library/Organisms/PageCardTemplate',
  component: PageCardTemplate,
  decorators: [Story => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundImageUrl: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    containerClassName: {
      control: { type: 'text' },
    },
    contentClassName: {
      control: { type: 'text' },
    },
  },
  args: {
    backgroundImageUrl:
      'https://s3-alpha-sig.figma.com/img/7b28/27d0/c67d3d5d8b71c72b6a4ad3cb492b0fdd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NgIS51wZ-m8WFHi26Ec6yRnH54ornio0eDbsHc74vZuRB-rIk~ahAX-x4d~JvOVTJxHr0jIdl4U9pjxHdxHZQ0uH3ygZTmVikVzhW~yA-DR2UC9RtZqvCNRirA5~lonhtAzL6grItrAFHRCWDn2QTjNyeyoJsbd0Rxtt2P4dHdv7lNg1C2hA1hGvlMPKZ5a8k-LUNvVOBMOUXx4BfbFAwjluIGa7BxuG2~e~S7F1m5HW8LE7OQiZ8piAak-0ByMtxHx0eyaKG8LfZSXuKegOAkU487L8YBfZ9EVJY0zu4Brth7BgrSXgnHGR~gu3GunU5MfPp1sNwj9CKtnCXhlcLw__',
  },
} satisfies Meta<typeof PageCardTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

// Greetings Component props
const content =
  'World Vision Canada is a Christian relief, development, and advocacy organization working to create lasting change in the lives of children and families. (To accommodate up to five lines of text).';
const title = 'Welcome back!';
const align = 'center';

// SignUp component props
const singupContent = "Don't have an account?";
const description = 'With your help, we can end poverty—for good.';

const LoginContent = () => (
  <>
    <Greetings title={title} content={content} align={align} />
    <LoginForm
      emailPlaceholder="Email address"
      passwordPlaceholder="Password"
      text="Login"
      forgotPassText="I forgot my password"
      onSubmit={data => console.log(data)}
    />
    <FormFooter
      linkText="Sign Up"
      content={singupContent}
      description={description}
    />
  </>
);

const CheckoutCalloutMolecule = () => {
  const amount = 49;
  const currencyCode = '$';
  const checkoutType = 'CAD/ One time';
  return (
    <CalloutMolecule
      closeCallback={() => {}}
      duration={5000}
      isVisible
      leftIcon
      width="100%"
      title=""
      type="none"
      display="flex"
      direction="column-reverse"
      align="center"
    >
      <Flex gapX="1" justify="center" align="center" gridColumn="2" wrap="wrap">
        <Box asChild>
          <Text size="7" weight="bold" wrap="nowrap">
            {currencyCode} {amount}
          </Text>
        </Box>
        <Box asChild>
          <Text size="2" weight="semibold">
            {checkoutType}
          </Text>
        </Box>
      </Flex>
    </CalloutMolecule>
  );
};

const YourDetailsContent = () => {
  return (
    <>
      <ProgressBar
        size="3"
        value={33}
        style={getStylesAsCssProperties({ '--progressBarColor': '#E86100' })}
        variant="surface"
      />
      <Greetings title="Sponsor Ashraful" align="center" />
      <CheckoutCalloutMolecule />
      <Heading size="6" weight="bold" align="left">
        Your details
      </Heading>
      <UserDetailsForm
        buttonText="Next"
        onSubmit={data => console.log(data)}
        onBackBtnClick={() => {}}
      />
    </>
  );
};

const PaymentDetailsContent = () => (
  <>
    <ProgressBar
      size="3"
      value={66}
      style={getStylesAsCssProperties({ '--progressBarColor': '#E86100' })}
      variant="surface"
    />
    <Greetings title="Sponsor Ashraful" align="center" />
    <CheckoutCalloutMolecule />
    <Heading size="6" weight="bold" align="left">
      Your Payment Info
    </Heading>
    <PaymentForm
      publishkey="pk_test_oKhSR5nslBRnBZpjO6KuzZeX"
      clientid=""
      amount={100}
      currency="cad"
      buttonLabelText="Donate now"
      onDonateClick={(stripe, elements) => {
        console.log(stripe, elements);
      }}
      onBackBtnClick={() => {}}
    />
    <Text size="2">
      In this fiscal year, World Vision Canada anticipates raising $378 million
      in total revenue for its community development, emergency relief, and
      advocacy work, of which approximately 14.3% will be used for necessary
      fundraising. In cases where donations exceed what is needed or where local
      conditions prevent program implementation, World Vision Canada will
      redirect funds to similar activities to help people in need. World Vision
      Canada is federally incorporated and located in Mississauga, Ontario. For
      more information, or for a copy of our latest audited financial
      statements, please visit our website at{' '}
      <Link
        style={{ fontSize: '14px' }}
        href="https://www.worldvision.ca"
        target="_blank"
      >
        www.worldvision.ca
      </Link>{' '}
      You may also send an email to{' '}
      <Link style={{ fontSize: '14px' }} href="mailto:info@worldvision.ca">
        info@worldvision.ca
      </Link>{' '}
      or contact the Director, Operational Excellence at 1-800-268-4888.
    </Text>
    <PartnerLogo />
  </>
);

const ChildAvailabilityContent = () => {
  const title = 'Sorry, we were unable to complete your sponsorship';
  const description =
    'has just been sponsored, but there are many others in need.';
  const subDescription = 'Please consider sponsoring another child';
  const childName = 'Ashraful';
  const buttonText = 'See another child';
  return (
    <Flex align="center" direction="column" wrap="wrap" gap="32px">
      <Greetings title={title} align="center" />
      <Heading size={{ initial: '5', md: '6' }} align="center" weight="bold">
        {childName} {description}
      </Heading>
      <Text size={{ initial: '3', md: '4' }} align="center" weight="regular">
        {subDescription}
      </Text>
      <Button text={buttonText} style={{ width: '100%', lineHeight: '24px' }} />
    </Flex>
  );
};

const CheckoutCalloutMoleculeThankYou = () => {
  const name = 'Ashraful';
  return (
    <CalloutMolecule
      closeCallback={() => {}}
      duration={5000}
      isVisible
      leftIcon={false}
      iconName="icon-highlight-on"
      width="100%"
      title=""
      type="success"
      showIcon
      display="flex"
      direction="column-reverse"
      align="center"
    >
      <Flex gapX="1" justify="center" align="center" gridColumn="2" wrap="wrap">
        <Box asChild>
          <Text
            size={{ initial: '5', md: '6' }}
            weight="semibold"
            wrap="nowrap"
          >
            {name}
          </Text>
        </Box>
      </Flex>
    </CalloutMolecule>
  );
};

const ThankYouWithLoginContent = () => {
  return (
    <>
      <ProgressBar
        size="3"
        value={100}
        style={getStylesAsCssProperties({ '--progressBarColor': '#E86100' })}
        variant="surface"
      />
      <Heading size={{ initial: '6', md: '7' }} weight="regular" align="center">
        Thank you for your sponsorship
      </Heading>
      <CheckoutCalloutMoleculeThankYou />
      <Image
        src="https://dev-beta.worldvision.ca/adobe/dynamicmedia/deliver/dm-aid--492b6a78-d941-47b7-8734-50af92323175/thankyoulogo.png"
        alt="Thank You"
        fallbackSrc={FallbackImage}
      />
      <Text size={{ initial: '3', md: '4' }} weight="regular" align="center">
        You are helping vulnerable children and families who need it most.{' '}
      </Text>
      <Button text="Back to home" style={{ width: '100%' }} mode="outline" />
    </>
  );
};

const ThankYouWithoutLoginContent = () => {
  return (
    <Flex align="center" justify="center" gap="9" direction="column">
      <Flex align="center" justify="center" gap="5" direction="column">
        <ProgressBar
          size="3"
          value={100}
          style={getStylesAsCssProperties({ '--progressBarColor': '#E86100' })}
          variant="surface"
        />
        <Heading
          size={{ initial: '6', md: '7' }}
          weight="regular"
          align="center"
        >
          Thank you for your sponsorship
        </Heading>
        <CheckoutCalloutMoleculeThankYou />
        <Image
          src="https://dev-beta.worldvision.ca/adobe/dynamicmedia/deliver/dm-aid--492b6a78-d941-47b7-8734-50af92323175/thankyoulogo.png"
          alt="Thank You"
          fallbackSrc={FallbackImage}
        />
      </Flex>
      <Flex align="center" justify="center" gap="5" direction="column">
        <Text size={{ initial: '4', md: '5' }} weight="semibold" align="center">
          Want an easier way to checkout?
        </Text>
        <Flex align="center" justify="center" gap="0" direction="column">
          <Text
            size={{ initial: '4', md: '5' }}
            weight="regular"
            align="center"
          >
            Create an account.
          </Text>
          <Text
            size={{ initial: '4', md: '5' }}
            weight="regular"
            align="center"
          >
            View real impact updates and more.
          </Text>
        </Flex>
        <ButtonGroup
          direction="vertical"
          data={[
            {
              text: 'Create an account',
              style: {
                width: '100%',
                padding: '16px 24px',
                fontSize: 'var(--typography-font-size-4)',
                lineHeight: 'var(--typography-line-height-4)',
              },
              mode: 'primary',
            },
            {
              text: 'Back to home',
              style: {
                width: '100%',
                padding: '16px 24px',
                fontSize: 'var(--typography-font-size-4)',
                lineHeight: 'var(--typography-line-height-4)',
              },
              mode: 'outline',
            },
          ]}
        />
      </Flex>
    </Flex>
  );
};

const PassWordVerificationContent = () => (
  <>
    <Greetings
      title="Reset your password"
      content="Please enter a secure password that meets the requirements listed below. You got this!"
      align="center"
    />
    <PasswordVerificationForm onSubmit={data => console.log(data)} />
  </>
);

export const SignIn: Story = {
  args: {
    children: <LoginContent />,
  },
};

export const YourDetails: Story = {
  args: {
    children: <YourDetailsContent />,
  },
};

export const PaymentDetails: Story = {
  args: {
    children: <PaymentDetailsContent />,
  },
};

export const ChildAvailability: Story = {
  args: {
    children: <ChildAvailabilityContent />,
  },
};

export const ThankYouWithLogin: Story = {
  args: {
    children: <ThankYouWithLoginContent />,
  },
};

export const ThankYouWithoutLogin: Story = {
  args: {
    children: <ThankYouWithoutLoginContent />,
  },
};

export const PasswordVerification: Story = {
  args: {
    children: <PassWordVerificationContent />,
  },
};
