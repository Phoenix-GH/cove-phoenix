import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap';
import Head from 'next/head';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import styles from './privacy.scss';

const easeInOutQuad = (t, b, c, d) => {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
}

export default class TermsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollActiveClass: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (document.documentElement.scrollTop > window.innerHeight) {
      this.setState({scrollActiveClass: 'active'});
    } else {
      this.setState({scrollActiveClass: ''});
    }
  }

  handleScrollTopClick = (e, to = 0, duration = 1250) => {
    const element = document.documentElement;
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Cove | Terms of Sale</title>
          <meta name="description" content="Cove privacy policy." />
        </Head>
        <Header color="secondary" />
        <Container>
          <div className="privacy">
            <button className={`privacy__scroll-top ${this.state.scrollActiveClass}`} onClick={this.handleScrollTopClick} />
            <h1>COVE PRIVACY POLICY</h1>
            <p>
              <strong>Last Updated: 4/16/2018</strong>
            </p>
            <p>
              <strong></strong>
            </p>
            <p>
              <strong>I. </strong>
              <strong>INTRODUCTION</strong>
            </p>
            <p>
                Cove Smart, LLC (“Cove”, “we”, “our”, “us”) recognizes the importance of
                privacy and personal information. Cove takes your privacy seriously. We
                believe in protecting your information as well as your person and
                belongings. The purpose of this privacy policy (this “Privacy Policy”) is
                to describe how Cove collects, manages, uses and shares information about
                our customers and safeguards our customers’ privacy. This Privacy Policy
                applies whether the information is (i) obtained through our customers,
                users, and visitors (“you” or “your”) to Cove’s website(s) and mobile
                applications, or any other interactive features and downloads that Cove
                owns, operates, and makes available through its websites and mobile
                applications and your use of such other mobile applications, websites,
                domains and sub-domains websites, domains, sub-domains (collectively the
            “Sites”), including    <a href="http://www.covesmart.com">www.covesmart.com</a>, however accessed
                and/or used by you; (ii) obtained through any of Cove products used or
                accessed by you, including Cove’s life safety and home intrusion security
                products, medical pendants, cameras, home automation products, and other
                related products (each, a “Product” and collectively, the “Products” or
                “System”); and/or (iii) obtained in connection with any of the related
                services provided by Cove, however accessed and/or used by you, including
                Cove’s alarm monitoring subscription services, home automation
                subscriptions services, customer support services and other related
                services to you (the “Services”).
            </p>
            <p>
                <strong>
                    <u>
                        PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND HOW WE
                        MANAGE, PROTECT AND USE YOUR INFORMATION. IF YOU DO NOT UNDERSTAND
                        ANY PROVISION OF THIS PRIVACY POLICY, PLEASE FEEL FREE TO CONTACT
                        COVE AT
                    </u>
                </strong>
                <a href="mailto:support@covesmart.com">
                    <strong>SUPPORT@COVESMART.COM</strong>
                </a>
                <strong><u> OR AS DESCRIBED AT THE END OF THIS PRIVACY POLICY.</u></strong>
            </p>
            <p>
                <strong><u>Scope; Third Party Sites</u></strong>
                . This Privacy Policy applies only to information we collect at and through
                the Sites. Cove’s Sites may contain links to third party sites that are not
                owned or controlled by Cove. Please be aware that we are not responsible
                for the privacy practices of such other sites. We encourage you to be aware
                when you leave Cove’s Sites and to read the privacy statements or policies
                of each and every website that collects personal information.
            </p>
            <p>
                <strong><u>Additional Terms</u></strong>
                . Please reference Cove Smart’s Terms and Conditions of Sale of Products
                and Services (“Terms of Sale”) which apply to your purchase of Cove’s
                Products and use of its Sites. Further, if you subscribe to Cove’s Services
                made available in connection with Cove’s Products and Sites, your use of
                those Services is also subject to the Terms of Sale.
            </p>
            <p>
                The Sites are not directed to, and we do not knowingly collect any personal
                information from children or teenagers under the age of eighteen (18). If
                you are under the age of 18, please do not attempt to register with us at
                the Sites or provide any personal information about yourself to us. If you
                are under the age of 18, you may only use the Sites under the supervision
                of your parents or guardians.
            </p>
            <p>
                <strong>II. </strong>
                <strong>PURPOSE OF THIS PRIVACY POLICY AND HOW IT AFFECTS YOU</strong>
            </p>
            <p>
                The purpose of this Privacy Policy is to clearly and concisely inform you
                of: (i) the information we collect through the Sites and/or your use of the
                Products and Services; (ii) how we use that information; (iii) what, if
                any, information we may share and with whom; (iv) how we protect that
                information; and (v) how you can obtain access to and review your
                Personally Identifiable Information (“PII”) collected through the Sites
                and/or your use of the Products and Services and request modifications and
                corrections. Any personal or other information we collect that can be used
                to uniquely identify or contact a single person is PII. Protecting your PII
                is a core value at Cove and this Privacy Policy is designed to explain to
                you in plain language how and what kinds of information we collect (public
                and PII), how Cove itself, and through third party services, uses
                “tracking” technology during your visits to the Sites and/or use of the
                Products and Services, how the Company uses the information it collects and
                how we protect that information. In addition, this Privacy Policy clearly
                explains the steps that you should take if you desire to opt-out of our
                personal information collection process and how to review and request
                modification of your personal information that Cove may have collected.
            </p>
            <p>
                <strong>III. </strong>
                <strong>INFORMATION WE COLLECT AND HOW AND WHY WE COLLECT IT</strong>
            </p>
            <p>
                Cove collects certain information to enable you to take full advantage of
                our Products and Services when you register at our Sites, order Products or
                subscribe to Services either through our Sites or through our customer
                service call center, communicate with customer service representatives,
                participate in our promotions, surveys or activities, or otherwise
                communicate with Cove. If you choose, you can visit the Sites without
                providing us with any information about yourself.
            </p>
            <p>
                Cove seeks to limit the collection and use of customer information required
                to deliver services to our customers, which includes advising our customers
                about our Products, Services and other opportunities, such as promotions,
                and to administer our business.
            </p>
            <p>
                <strong>
                    <u>
                        Personal Information You Provide to Us When You Become a Customer
                    </u>
                </strong>
                .
            </p>
            <p>
                The types of PII you provide and we collect when you become a customer of
                Cove by Purchasing a Product or System from us include:
            </p>
            <p>
                (i) Your name
            </p>
            <p>
                (ii) The address of the location where the System will be installed
                (“Premises”)
            </p>
            <p>
                (iii) Your billing address
            </p>
            <p>
                (iv) Your shipping address
            </p>
            <p>
                (v) You email address
            </p>
            <p>
                (vi) Your telephone or mobile phone number
            </p>
            <p>
                (vii) Age, gender and demographic information (not required to be
                completed)
            </p>
            <p>
                (viii) Your user name and password for your Cove customer account (log-in
                credentials)
            </p>
            <p>
                (ix) Your credit card, debit card and bank account numbers (solely for
                payment purposes)
            </p>
            <p>
                <strong>
                    <u>
                        Personal Information You Provide to Cove When You Subscribe to Our
                        Services (if applicable)
                    </u>
                </strong>
            </p>
            <p>
                When you subscribe to any of Cove’s Services, you must provide at minimum
                the following PII:
            </p>
            <p>
                (i) Whether your Premises is a home, apartment or business
            </p>
            <p>
                (ii) Name and telephone number for friends or family you would like to be
                contacted if an alarm, home intrusion, or life safety event is triggered.
            </p>
            <p>
                (iii) Information such as a “verbal password” and additional information
                selected by you to be used to verify your identity when you communicate
                with customer service or with the monitoring center, or if you forget your
                log-in credentials for your Cove customer account.
            </p>
            <p>
                <strong>
                    <u>
                        Personal Information Collected Through a Security Camera (if
                        applicable)
                    </u>
                </strong>
            </p>
            <p>
                When you enable the recording features on one or more security cameras
                (“Camera(s)”), if any, Cove may record, store, and process video and/or
                audio recordings from the Cameras, depending on how you configure the
                Camera(s) and its settings and depending on whether Cove offers and you
                have subscribed to such Services from Cove. This may include capturing and
                making available to you portions of the recording data as part of a
                notification or analysis of the data to identify motion and other events.
                Cove may process and store information from your Camera(s), if any, so that
                we can send you alerts when there is any event. If you have the recording
                features enabled, and Cove offers recording Services to which you have
                subscribed, during your Camera(s) recording subscription Services period we
                will capture, process, and store video and audio recordings from your
                Camera(s) for at least thirty (30) days from the date such data is first
                recorded and stored on Cove’s systems (Cove’s “Date of First Capture”).
                During your Camera(s) recording subscription Services period, you will be
                able to access those recordings for up to 30 days from Cove’s Date of First
                Capture of such data.
            </p>
            <p>
                <strong>
                    NOTE: As more fully explained in the Terms of Sale, privacy laws in the
                    state of your Premises may impose certain obligations on you and your
                    use of Camera(s). You (not Cove) are solely responsible for ensuring
                    that you comply with any applicable laws when you use your Camera(s).
                    You may be required, for example, to display a notice (even inside your
                    Premises) that alerts visitors to your Premises that you are using a
                    Camera(s) that is recording audio and video. Your recording and sharing
                    of videos captured using your Camera(s) that involves other people may
                    affect their privacy rights.
                </strong>
            </p>
            <p>
                <strong>
                    <u>
                        Non-personally Identifiable Information (Non-PII) Cove Collects
                        Automatically
                    </u>
                </strong>
                .
            </p>
            <p>
                As is true with most websites, we collect certain non-PII information
                automatically when you visit or use Cove’s Sites, such as:
            </p>
            <p>
                (i) Your IP Address;
            </p>
            <p>
                (ii) The type of web browser you use to access the Sites
            </p>
            <p>
                (iii) Your computer or mobile device type
            </p>
            <p>
                (iv) Unique device identifiers for your mobile devices or tablets
            </p>
            <p>
                (v) Operating system version you are using
            </p>
            <p>
                (vi) The website from where you navigated to Cove Sites
            </p>
            <p>
                (vii) Time and date of using, accessing, or otherwise interacting with our
                Sites
            </p>
            <p>
                (viii) The pages on our Sites that you view
            </p>
            <p>
                (ix) The name of your Internet service provider (ISP) and/or host
                information
            </p>
            <p>
                <strong>
                    <u>
                        Non-personally Identifiable Information (Non-PII) Cove Collects
                        Through Cookies and/or Web Beacons and May Share with Third
                        Parties, Including Our Analytics Partners.
                    </u>
                </strong>
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
                In addition to your personal information, including PII, Cove also collects
                non-personal identifiable information (non-PII) through the use of cookies
                and web beacons, either on its own or through our analytics partners as
                described below:
            </p>
            <p>
                (i) <strong>Web-Browser Cookies</strong>. Cove’s Sites may use “cookies” to
                enhance your user experience. Your web browser may place cookies on your
                hard drive for record-keeping purposes and sometimes to track information
                about you. A cookie is a small file containing a string of characters that
                is sent to your computer when you visit a website. When you visit the
                website again, the cookie allows that site to recognize your browser.
                Cookies may store unique identifiers, user preferences and other
                information. You may choose to set your web browser to reject cookies, or
                to alert you when cookies are being sent. If you do so, please note that
                some parts of the Website may not function properly. Please also note that
                “cookies” are used to collect general usage and volume statistical
                information that does not include PII.
            </p>
            <p>
                (ii) <strong>Web Beacons</strong>. Cove’s Sites may also contain electronic
                images known as Web beacons (sometimes called single-pixel gifs) that are
                set by Cove’s service providers or business partners. Web beacons are used
                along with cookies enabling Cove and/or its partners to compile aggregated
                statistics and analyze how its Sites are used. Cove may use a third-party
                service provider or its business partners to gather information about how
                you and others use Cove’s Sites. For example, Cove will know how many users
                access a specific page and which links they clicked on. Cove uses this
                aggregated information to understand and optimize how Cove’s Sites are
                used.
            </p>
            <p>
                (iii) <strong>Analytics Partners</strong>. By using Cove’s Sites, you
                consent to the processing of data about you by our analytics partners in
                the manner and for the purposes set out above regarding the use of cookies
                and web beacons. Currently, our analytics partners include, without
                limitation, Google Analytics, Facebook, Twitter Analytics, and Open Graph.
                Cove has no ability to control or monitor our analytics partners' data
                collection or data use practices with respect to the information they
                collect from Cove’s sites. You should visit the websites of our analytics
                partners for more information about how they use and protect non-PII. Cove
                uses analytics partners, who use cookies and web beacons to perform their
                services, to help us understand how visitors use our Sites and to compile
                reports on website activity, to analyze our customers, including your use
                of our Sites and our relationship with you, so that we can improve our
                Sites, and give us data about where visitors, users and customers are
                clicking on our Sites.
            </p>
            <p>
                <strong><u>Links to Third-Party Sites and Social Media</u></strong>
                .
            </p>
            <p>
                Our Sites may contain links to other websites operated by third parties
                including, but not limited to, social media features such as Facebook,
                Twitter, Instagram, YouTube, and Pinterest buttons or links. These
                third-party sites may collect information about you if you click on a link
                and the social media sites may automatically record information about your
                browsing behavior every time you visit a site that has a social media
                button. Your interactions with these features are governed by the privacy
                policy of the company providing the link, not this Privacy Policy.
            </p>
            <p>
                <strong>IV. </strong>
                <strong>HOW WE USE YOUR INFORMATION</strong>
            </p>
            <p>
                <strong>
                    <u>To Provide Products, Services, and Information to You</u>
                </strong>
                . As described above, Cove collects information from you so that we can
                provide the Products and Services that you purchase from us, and to provide
                information that you request from us. This includes sending you alarm
                alerts and important service information about your System and our Products
                and Services. We may use the information that we collect about you to
                accomplish any of the following: (1) provide you with information,
                services, or process transactions that you have requested or agreed to
                receive, including sending electronic newsletters, or providing you with
                special offers or promotional materials on behalf of Cove or third parties;
                (2) enable you to participate in a variety of the features on the Sites;
                (3) process your registration with the Sites, including verifying that your
                email address is active and valid; (4) improve and customize your
                experience when you contact the Sites; (5) contact you regarding your use
                of the Sites and, in our discretion, changes to the Sites or the policies
                that apply to them; (6) comply with court orders, valid subpoenas, and/or
                other applicable laws and regulations; (7) to improve and enhance the
                Products and Services you purchase from Cove; (8) for Cove’s other business
                purposes; and (9) for purposes disclosed at the time you provide your
                information or as otherwise set forth in this Privacy Policy. If you
                provide comments or commentary or other materials to the Sites, we may use
                these comments and materials as provided (or in a reasonably similar
                manner), which may include your full name and other information as further
                set forth in the Terms of Sale.
            </p>
            <p>
                <strong><u>Your Consent</u></strong>
                . Except as otherwise provided in this Privacy Policy, we will share
                personal information with companies, organizations or individuals outside
                of Cove only when we have your consent to do so.
            </p>
            <p>
                <strong><u>Legal Proceedings</u></strong>
                . We will share personal information with third party companies,
                organizations or individuals outside of Cove if we have a good-faith belief
                that access, use, preservation or disclosure of the information is
                reasonably necessary to:
            </p>
            <p>
                (i) Meet any applicable law, regulation, subpoena, legal process or
                governmental request.
            </p>
            <p>
                (ii) Enforce applicable Terms of Sale and/or a Retail Installment
                Agreement, if applicable, including investigation of potential violations.
            </p>
            <p>
                (iii) Detect, prevent, or otherwise address fraud, security or technical
                issues.
            </p>
            <p>
                (iv) Protect against harm to the rights, property or safety of Cove, our
                users, customers or the public as required or permitted by law.
            </p>
            <p>
                <strong><u>Transfer in the Event of Sale or Change of Control</u></strong>
                . If the ownership of all or substantially all of Cove’s business changes
                or we otherwise transfer assets relating to our business or the Sites,
                Products and/or Services to a third party, such as by merger, acquisition,
                bankruptcy proceeding or otherwise, we may transfer or sell your personal
                information to the new owner. In such a case, unless permitted or otherwise
                directed by applicable law, your information would remain subject to the
                terms of the applicable Privacy Policy in effect at the time of such
                transfer.
            </p>
            <p>
                <strong>V. </strong>
                <strong>SECURITY OF YOUR INFORMATION</strong>
            </p>
            <p>
                The security of your information, particularly your PII, is important to
                Cove. Cove follows generally accepted industry standards to protect your
                PII, both during transmission and once we receive it. Your personal
                information is contained behind secured networks and is only accessible by
                a limited number of persons who have special access rights to such systems,
                and are required to keep the information confidential. In addition, all PII
                and other sensitive/payment and other information you supply is encrypted
                via Secure Socket Layer (SSL) technology. Cove implements a variety of
                security measures when a user enters, submits, or accesses their
                information to maintain the safety of your PII.
            </p>
            <p>
                Because no method of transmission over the Internet, or method of
                electronic storage, is 100% secure, Cove cannot guarantee its security.
                Unauthorized entry or use, hardware or software failure, and other factors,
                may compromise the security of information at any time. WE DO NOT WARRANT
                OR REPRESENT THAT WE CAN GUARANTY THE SECURITY OF ANY INFORMATION THAT YOU
                TRANSMIT TO US WHEN YOU USE COVE’S SITES. YOU PROVIDE SUCH PERSONAL
                INFORMATION AT YOUR OWN RISK.
            </p>
            <p>
                If you have any questions about the security of your information in using
            Cove’s Sites, Products or Services, please contact us at    <a href="mailto:support@covesmart.com">support@covesmart.com</a>.
            </p>
            <p>
                <strong>VI. </strong>
                <strong>
                    INFORMATION COVE MAY SHARE WITH THIRD PARTIES CONTENT AND LEAKS
                </strong>
            </p>
            <p>
                We may collect and share information that we do not consider to be personal
                information or PII, such as aggregated user statistics, with third parties
                other than our analytics partners referenced above.
            </p>
            <p>
                (i) <strong>Site Hosting and Designer Third Parties</strong>. We may use
                third party vendors to perform certain services on behalf of the Company,
                such as hosting the Sites, designing and/or operating website features,
                tracking website analytics, enabling you to purchase any goods and/or
                services, and allowing us to send you e-mail newsletters or perform other
                administrative services as well as performing other services at your
                request or with your consent that relate to the Company's products or
                services, such as, but not limited to, alarm monitoring. We may provide
                third parties with access to your information, including your personal
                information, to carry out the services that these parties are performing
                for you or for us.
            </p>
            <p>
            (ii)    <strong>Site Content Provided in Association with Third Parties</strong>.
                Access to certain areas of the Sites may be provided to you in association
                with third parties and may require you to disclose personal information in
                order to register for and access products and/or services. Such co­branded
                areas will identify the third-party associates. If you elect to register
                for products and/or services at co-branded areas you may be providing your
                information to both us and the third-party associates. Further, if you
                sign-in to a co­branded area with a username and password obtained on the
                Sites, your PII may be disclosed to the identified third-party associates
                for that co-branded area and will be subject to the third-party associates'
                privacy policies.
            </p>
            <p>
                (iii) <strong>Cove’s Service Providers and Affiliates</strong>. Cove may
                share your PII with its service providers, business partners, subsidiaries
                and affiliates; and, if Cove does so, it will require those third parties
                to protect your PII in compliance with the terms of this Privacy Policy.
            </p>
            <p>
                <strong>
                    Cove does not sell, lease or transfer your PII to ANY third parties.
                </strong>
            </p>
            <p>
                <strong>VII. </strong>
                <strong>
                    YOUR ABILITY TO REVIEW YOUR PERSONAL INFORMATION AND REQUEST CHANGES
                </strong>
            </p>
            <p>
                <strong>
                    <u>Changes to Your Personal Information and Preferences</u>
                </strong>
                . You are solely responsible for the accuracy and content of any personal
                information that is submitted to the Sites (or which may be collected by
                the Company pursuant to this Privacy Policy). You have the right to review
                your PII that we have collected from you. After you review such
                information, if you decide to change the personal information that we have
            on file for you, send your request to Cove by email at    <a href="mailto:support@covesmart.com">support@covesmart.com</a>.
            </p>
            <p>
                To change the types of communication that you receive from the Company or
                how you receive such communications, simply cancel or modify your
                communication preferences by following the instructions in the email or
                communication that you received or by logging into your customer account on
                Cove’s website and changing your communication preferences.
            </p>
            <p>
                If you terminate your account, any association between your account and
                information Cove stores will no longer be accessible through your account.
                However, given the nature of sharing on the Cove’s Sites and Services, any
                public activity on your account prior to deletion will remain stored on
                Cove’s servers and will remain accessible to the public.
            </p>
            <p>
                <strong>VIII. </strong>
                <strong>CHANGES TO OUR PRIVACY POLICY</strong>
            </p>
            <p>
                Cove may update and amend this Privacy Policy from time to time. Use of
                information Cove collects now is subject to the Privacy Policy in effect at
                the time such information is used. If Cove amends this Privacy Policy, it
                will notify you by posting an announcement on Cove’s Sites and/or on your
                customer account. You can find the current version of this Privacy Policy
                at any time at
                <a href="http://www.covesmart.com/privacypolicy">
                    www.covesmart.com/privacypolicy
                </a>
                . If Cove makes any material changes to this Privacy Policy, we may also
                choose at our discretion to notify you by sending you an email.
            </p>
            <p>
                You are bound by any update and amendment to the Privacy Policy when you
                keep using the Sites and/or Cove’s Services after such update or amendment
                has been first posted on Cove’s website and/or your customer account.
            </p>
            <p>
                <strong>IX. </strong>
                <strong>HOW TO CONTACT US WITH QUESTIONS</strong>
            </p>
            <p>
              If you have any questions, comments or requests regarding the Privacy
              Policy, please contact Cove at    <a href="mailto:support@covesmart.com">support@covesmart.com</a>.
            </p>
          </div>
        </Container>
        <Footer />
        <style jsx>{styles}</style>
        <style jsx global>{`
        .no-gutter > [class*='col-'] {
          padding-right:0;
          padding-left:0;
        }
        `}
        </style>
      </Layout>
    );
  }
}
