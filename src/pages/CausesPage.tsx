import React, { useState } from 'react';
import './CausesPage.css';
import { Icon } from '@world-vision/wv360-core-library';
import { Footer } from '@world-vision/wv360-core-library';
import { ProductCard } from '@world-vision/wv360-core-library';
import { useNavigate } from 'react-router-dom';
import StarsAvailable from '../components/StarsAvailable/StarsAvailable';
import { Image } from '@world-vision/wv360-core-library';

const CausesPage: React.FC = () => {
  const navigate = useNavigate();
  const starsAvailable = 12; // or pull this from props/context/store
  const [thankYouCard, setThankYouCard] = useState<
    null | 'children' | 'communities'
  >(null);

  const handleDonateClick = (type: 'children' | 'communities') => {
    setThankYouCard(type);
  };

  const closeOverlay = () => {
    setThankYouCard(null);
  };

  return (
    <>
      <div className="logo-bar">
        {' '}
        <Icon
          name="icon-home"
          size="25"
          color="#ffffff"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        ></Icon>
        <Image
          src="/Mono.png"
          alt="Logo"
          fallbackSrc="/Mark.svg"
          width="4vw"
          height="4vh"
          style={{ zIndex: 10, position: 'relative' }}
          link={{
            href: 'https://www.worldvision.ca/',
            target: '_blank',
          }}
        />
      </div>

      {thankYouCard && (
        <div className="thank-you-overlay" onClick={closeOverlay}>
          <div
            className="thank-you-card-content"
            onClick={e => e.stopPropagation()}
          >
            <Icon
              name="icon-close"
              size="25"
              color="white"
              onClick={closeOverlay}
              style={{
                position: 'absolute',
                cursor: 'pointer',
                marginLeft: '15vw',
                marginTop: '1vw',
              }}
            ></Icon>
            {thankYouCard === 'children' ? (
              <ProductCard
                imageAlt="Thank You Card One"
                imageSrc="/thank-you.png"
                productName="Thank you for supporting Help Children Thrive!"
                productPrice="Your gift helps us meet the needs of vulnerable children and families around the world by providing things like health care, protection and safety, food, and clean water. "
                size="1"
              />
            ) : (
              <ProductCard
                imageAlt="Thank You Card Two"
                imageSrc="/thank-you-two.png"
                productName="Thank you for supporting Build Stronger Communities!"
                productPrice="With your help, we equip communities to hold their own governments and institutions accountable. With community ownership, their local advocacy creates stronger systems that benefit everyone."
                size="1"
              />
            )}
          </div>
        </div>
      )}
      <div className="card-wrapper">
        <div className="bar">
          <div className="test">
            <StarsAvailable starsAvailable={starsAvailable} />
          </div>
        </div>
        <br />
        <ProductCard
          button={{
            mode: 'primary',
            size: 'xl',
            text: 'Donate Now',
            onClick: () => handleDonateClick('children'),
          }}
          size="2"
          imageAlt="Donate Image 1"
          imageSrc="/donate-one.jpg"
          productName="Help Children Thrive"
          productPrice="Support programs that give children the essentials they need to grow up healthy, safe, and educated-wherever the need is greatest."
        />
        <br></br>
        <ProductCard
          button={{
            mode: 'primary',
            size: 'xl',
            text: 'Donate Now',
            onClick: () => handleDonateClick('communities'),
          }}
          size="2"
          imageAlt="Donate Image 2"
          imageSrc="/donate-two.jpg"
          productName="Build Stronger Communities"
          productPrice="Empower families and communities with resources and opportunities to break the cycle of poverty and create lasting change."
        />
      </div>
      <Footer
        Content={[
          {
            text: 'Charitable Registration Number: 119304855RR0001',
          },
        ]}
        ImageIcon={[
          {
            alt: 'Accredited Member',
            iconHeight: '40',
            iconWidth: '135',
            link: {
              href: '#',
              target: '_blank',
            },
            name: 'icon-accredited-member',
          },
          {
            alt: 'Imagine Canada',
            iconHeight: '40',
            iconWidth: '135',
            link: {
              href: '#',
              target: '_blank',
            },
            name: 'icon-imagine-canada',
          },
          {
            alt: 'p4',
            height: '40px',
            iconHeight: '40',
            iconWidth: '135',
            link: {
              href: '#',
              target: '_blank',
            },
            name: 'icon-humanitarian-coalition-member',
            width: '135px',
          },
        ]}
        ImgContent="We are proud to be reviewed and held accountable by these independent third-party organizations:"
        backgroundColor="#000"
        className=""
        color="#fff"
        contactInfo="1.866.595.5550"
        imageColor="#fff"
        links={[
          {
            text: 'Accessibility',
          },
          {
            text: 'Safeguarding',
          },
          {
            text: 'Privacy & Security',
          },
          {
            text: 'Terms and Conditions',
          },
          {
            text: 'Cookie & Web Technologies',
          },
        ]}
        logoType="light"
        socialButtons={[
          {
            backgroundColor: '#fff',
            backgroundSize: '44px',
            color: '#000',
            link: {
              href: '#',
              target: '_blank',
            },
            name: 'icon-social-facebook',
            rounded: true,
            size: '24',
          },
          {
            backgroundColor: '#fff',
            backgroundSize: '44px',
            color: '#000',
            link: {
              href: '#',
              target: '_blank',
            },
            name: 'icon-social-youtube',
            rounded: true,
            size: '24',
          },
          {
            backgroundColor: '#fff',
            backgroundSize: '44px',
            color: '#000',
            link: {
              href: '#',
              target: '_blank',
            },
            name: 'icon-social-twitter',
            rounded: true,
            size: '24',
          },
          {
            backgroundColor: '#fff',
            backgroundSize: '44px',
            color: '#000',
            link: {
              href: '#',
              target: '_blank',
            },
            name: 'icon-social-instagram',
            rounded: true,
            size: '24',
          },
        ]}
      />
    </>
  );
};

export default CausesPage;
