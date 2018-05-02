import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap';
import Head from 'next/head';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import styles from './terms.scss';

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
          <meta name="description" content="Cove terms of sale of products." />
        </Head>
        <Header color="secondary" />
        <Container>
          <div className="terms">
            <button className={`terms__scroll-top ${this.state.scrollActiveClass}`} onClick={this.handleScrollTopClick} />
            <h1>
              COVE SMART’S TERMS AND CONDITIONS OF SALE OF PRODUCTS AND SERVICES
            </h1>
            <p>
              <strong>Last Updated: 4/16/2018</strong>
            </p>
            <p>
              <strong>
                <u>
                  CONFIRMATION OF YOUR AGREEMENT TO THESE TERMS AND CONDITIONS OF
                  SALE OF PRODUCTS AND SERVICES
                </u>
              </strong>
            </p>
            <p>
              IF YOU ACCEPT THE TERMS AND CONDITIONS OF SALE OF PRODUCTS AND SERVICES
              (“TERMS OF SALE”) SET FORTH BELOW, CLICK “I accept” BELOW.
            </p>
            <p>
              THE TERMS OF SALE AND PRIVACY POLICY ARE POSTED ON    <a href="http://www.covesmart.com">www.covesmart.com</a> AND MADE AVAILABLE
              TO YOU FOR YOUR REVIEW AT ANY TIME.
            </p>
            <p>
                These Terms of Sale constitute an agreement between you, the purchaser
                (“Customer”, “you” or “your”), on the one hand, and Cove Smart, LLC, a
                Delaware limited liability company, its subsidiaries and affiliates
                (collectively, “Cove”, “we”, “us” or “our”), on the other hand, and govern
                your purchase of life safety and home intrusion security products, medical
                pendants, cameras, home automation products, and other related products
                (each, a “Product” or collectively, the “Products” or “System”).
            </p>
            <p>
                These Terms of Sale also constitute an agreement between you and Cove
                pertaining to:
            </p>
            <p>
                (1) alarm monitoring subscription services;
            </p>
            <p>
                (2) home automation subscription services;
            </p>
            <p>
                (3) customer support services; and
            </p>
            <p>
                (4) websites, mobile applications (“Applications”), interactive features
                and downloads that Cove owns, operates, and makes available through its
                websites and Applications and your use of such other mobile applications,
                websites, domains and sub-domains (items listed in this paragraph (4),
                collectively, the “Sites”) and any related services, however accessed
                and/or used, whether via personal computers, mobile devices,
                telecommunications, in person, and/or the Products (items listed in
                paragraphs (1), (2), (3) and (4) above, collectively, the “Services”)
                offered or created by Cove.
            </p>
            <p>
                In addition, these Terms of Sale set forth your rights and obligations
                regarding your purchase(s) of Products and Services from Cove, including
                important limitations and exclusions, such as those contained in Cove’s
                Products and Services warranties set forth herein.
            </p>
            <p>
                <strong><u>PLEASE READ THESE TERMS OF SALE CAREFULLY</u></strong>
                . These Terms of Sale represent the terms and conditions under which we are
                willing to sell you the Products and provide you the Services and access to
                the Sites.
                <strong>
                    These Terms of Sale contain important disclaimers, limitations of
                    liability and indemnity obligations applicable to the Products,
                    Services and Sites and requires that you resolve disputes in small
                    claims court, when applicable, or through a court bench trial rather
                    than jury trials or class actions (as describe in Section 51 below)
                </strong>
                . By selecting the “I accept” box above or purchasing the Products or
                Services, you agree that you have read these Terms of Sale and are legally
                bound by these Terms of Sale, including the disclaimers, limitations of
                liability, indemnity obligations and dispute resolution process outlined
                herein. The Cove Privacy Policy found at
                <a href="http://www.covesmart.com/privacypolicy">
                    www.covesmart.com/privacypolicy
                </a>
                is incorporated by reference into these Terms of Sale. You may print these
                Terms of Sale by clicking the print button on your Internet browser.
            </p>
            <p>
                In the event that any of the terms, conditions, and notices contained in
                these Terms of Sale conflict with any other agreement entered into between
                you and Cove, including without limitation, the other terms, policies and
                guidelines contained within any particular section of the Sites, or with
                any terms included with any product or service purchased from us, then
                these Terms of Sale shall control. Notwithstanding the foregoing, if you
                have entered into a Retail Installment Agreement between you and Cove and
                if there are any conflicts between the terms and conditions of these Terms
                of Sale and that Retail Installment Agreement, the terms and conditions of
                the Retail Installment Agreement shall control.
            </p>
            <p>
                1. <strong><u>Acknowledgment of Customer</u></strong>. THIS IS A LEGAL
                AGREEMENT BETWEEN YOU AND COVE. BY ACCEPTING THESE TERMS OF SALE THROUGH A
                SITE, OR BY PURCHASING, ACCESSING, OR USING ANY PRODUCTS OR SERVICES, YOU
                ARE ACCEPTING AND AGREEING TO THESE TERMS OF SALE ON BEHALF OF YOURSELF AND
                ANY USER OR ENTITY YOU REPRESENT INCLUDING THE DISCLAIMERS, LIMITATIONS OF
                LIABILITY AND INDEMNITY OBLIGATIONS SET FORTH BELOW. YOU ALSO REPRESENT AND
                WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ACCEPT AND
                AGREE TO THESE TERMS OF SALE, THAT YOU ARE OF SUFFICIENT LEGAL AGE,
                ACCORDING TO THE LAWS OF YOUR JURISDICTION OR PLACE OF RESIDENCE, TO
                PURCHASE AND USE THE PRODUCTS AND/OR SERVICES, AND TO AGREE TO THESE TERMS
                OF SALE. YOUR PURCHASE AND/OR USE OF THE PRODUCTS AND/OR SERVICES OFFERED
                TO YOU BY COVE IS EXPRESSLY CONDITIONED UPON YOUR ACCEPTANCE IN THEIR
                ENTIRETY, WITHOUT MODIFICATION BY YOU, OF THESE TERMS OF SALE. IF YOU DO
                NOT AGREE WITH EACH OF THE PROVISIONS OF THESE TERMS OF SALE, YOU
                UNDERSTAND THAT YOU SHOULD <u>NOT</u> SELECT THE “I AGREE” BOX ABOVE AND/OR
                PURCHASE OR USE COVE’S PRODUCTS AND/OR SERVICES. YOU MAY PRINT THESE TERMS
                OF SALE BY ACCESSING THEM AT
                <a href="http://WWW.COVESMART.COM/MYACCOUNT">
                    WWW.COVESMART.COM/TERMSOFSALE
                </a>
                AND THEN CLICKING THE PRINT BUTTON ON YOUR INTERNET BROWSER.
            </p>
            <p>
              2.&nbsp;
              <strong>
                <u>
                  Important Limitations on Resolving Disputes between You and Cove;
                  Rights as a Consumer in Your Jurisdiction Not Affected
                </u>
              </strong>
              .
              <strong>
                Please read these Terms of Sale carefully. They require that disputes
                between you and Cove relating to or arising from your purchase or use
                of the Products and Services be resolved, in each instance, in either a
                small claims action or a bench trial before a judge and that you waive
                your right to a jury trial and/or to participate in a class action
                against Cove.
              </strong>
              As a consumer, you have certain legal rights. The disclaimers, exclusions,
              and limitations of liability outlined in these Terms of Sales will not
              apply to the extent prohibited by applicable law in your jurisdiction or
              state of residence. For example, certain jurisdictions do not allow the
              exclusion of implied warranties, including exclusions relating to products
              or services that are faulty or not as described, or the exclusion or
              limitation of incidental or consequential damages or other rights. For a
              full description of your legal rights as a consumer you should refer to the
              laws applicable in your jurisdiction or state of residence. Nothing in
              these Terms of Sale will affect those other legal rights.
            </p>
            <p>
                3.&nbsp;
                <strong>
                  <u>Right of Cove to Change these Terms of Sale from Time to Time</u>
                </strong>
                . Cove reserves the right to alter, modify, change or update these Terms of
                Sale from time to time at any time determined by Cove at its sole
                discretion. Each time you purchase Products or Services from Cove, the
                Terms of Sale in effect at the time you make your purchase will apply to
                and govern that purchase between you and Cove. You should therefore review
                the Terms of Sale then in force any time you decide to make a purchase from
                Cove prior to making a purchase. If you purchase Services from Cove, Cove
                will notify you via your email address and/or through your online customer
                account with Cove if any changes to these Terms of Sale are made that may
                affect your purchase/subscription of the Services. In the event you have
                any questions about these Terms of Sale or any changes made to them, please
            email Cove at    <a href="mailto:support@covesmart.com">support@covesmart.com</a> to receive
                answers to your questions.
            </p>
            <p>
                4. <strong><u>Life Safety Notice</u></strong>. IF YOU PURCHASED A SYSTEM
                THAT INCLUDES SMOKE DETECTORS OR CARBON MONOXIDE DETECTORS, OR IF YOU ADD
                SMOKE DETECTORS OR CARBON MONOXIDE DETECTORS AT A LATER TIME, THERE MAY BE
                SPECIFIC REQUIREMENTS OR STANDARDS FOR THE INSTALLATION, MAINTENANCE,
                PERMITS AND LOCATION OF SUCH DETECTORS. CONTACT YOUR LOCAL AUTHORITY HAVING
                JURISDICTION OR CONSULT A QUALIFIED PROFESSIONAL TO ASSIST IN THE
                INSTALLATION, MAINTENANCE AND LOCATION OF SUCH DETECTORS. YOU HAVE SOLE
                RESPONSIBILITY FOR COMPLYING WITH ANY AND ALL CODES, LAWS AND STANDARDS
                THAT MAY APPLY TO THE INSTALLATION, PLACEMENT, USE AND MAINTENANCE OF THE
                SYSTEM. COVE MAKES NO WARRANTY OR REPRESENTATION THAT ANY SMOKE AND/OR
                CARBON MONOXIDE DETECTORS SOLD BY COVE CONSTITUTES A FIRE ALARM SYSTEM OR
                MEETS THE REQUIREMENTS OF ANY APPLICABLE STATE OR LOCAL LAW, CODE,
                ORDINANCE, OR AUTHORITY IN THE JURISDICTION OF YOUR PREMISES OR ANY
                INDUSTRY STANDARD, INCLUDING, BUT NOT LIMITED TO, NFPA 72.
            </p>
            <p>
                5. <strong><u>Fire Alarm Components</u></strong>. If you purchase fire
                alarm Products as part of your System, Cove makes no representation that
                the fire alarm Products meet local code requirements or constitute a “fire
                alarm system” as that term is defined by the Authority Having Jurisdiction
                (“AHJ”) over fire alarm systems where your residence (“Premises”) are
                located. Cove recommends that you have a fire alarm system installed by a
                licensed professional pursuant to NFPA 72 standards and AHJ
                recommendations. You also understand that only those smoke detectors you
                purchase from Cove, if any, are monitored by the Monitoring Company and are
                supplementary to your existing code-compliant system.
            </p>
            <p>
                6. <strong><u>Payment Methods</u></strong>. Cove accepts credit cards and
                debit cards as forms of payment. If a credit card is being used for a
                transaction, Cove may obtain a pre-approval from the credit card company
                for an amount up to the amount due for the transaction. Charging your
                credit card or debit card for Membership Fees and/or Service Plans, if any,
                and Products occurs at the time of purchase unless you are purchasing
                Products pursuant to a Retail Installment Agreement, in which case the
                amounts due for those Products will be charged on the dates set forth
                therein. Cove accepts the following credit cards: Visa, MasterCard,
                American Express, and Discover. We may not accept prepaid debit cards on
                accounts with a Retail Installment Agreement. We are unable to accept
                credit cards issued by banks outside of the United States. Debit cards and
                check cards have daily spending limits that may prevent the processing of
                your order.
            </p>
            <p>
                7. <strong><u>Recurring Payment Authorization.</u></strong> You authorize
                Cove or its assignees to charge your credit/debit card on file for your
                recurring monthly payments for your selected Service Plan, if any, on your
                monthly due date (“Payment Due Date” as further described below in Section
                24). If Cove changes the recurring monthly payment amount for your Service
                Plan, we will send you at least ten (10) days advance notice by email to
                the email address on file in your customer account before the recurring
                monthly payment amount is changed. You also agree that Cove can charge your
                credit/debit card for any unpaid balance owed for Products or Services
                received, including the Monthly Subscription Fee (as described in Section
                24 below), if any, and any late charges or interest you may have incurred
                for prior late payments. You certify that you are an authorized user of
                this credit/debit card and will not dispute these transactions with your
                credit card company or bank; so long as the transactions correspond to the
                terms of these Terms of Sale. If a Payment Due Date falls on a weekend or
                holiday, you understand that the payments may be executed on the next
                business day. In the case of a transaction being rejected for any reason,
                you understand and agree that Cove may at its discretion attempt to process
                the charge as many times as needed until the payment is received. You may
                change your Payment Due Date at
                <a href="http://www.covesmart.com/myaccount">
                    www.covesmart.com/myaccount
                </a>
                or by calling Cove customer support which can be reached at 855-268-3669.
            </p>
            <p>
                8. <strong><u>Authorization for Cove to Contact You</u></strong>.
                <a name="_Hlk510181631">
                    You expressly authorize Cove and agree to receive
                    pre-recorded/artificial voice messages calls and/or use of an automatic
                    dialing device, text messages and/or emails from Cove, our partners,
                    subcontractors, or any and all other companies that we may have to
                    transfer your account to at any telephone number or email address that
                    you have provided us or that we have otherwise obtained, which could
                    result in charges to you. We may place such calls, texts or emails to
                    (i) notify you of updates or changes to your customer account,
                    including new purchases by you or modifications to agreements you have
                    entered into with us, including your Retail Installment Agreement, if
                    applicable; (ii) notify you of updates or changes to these Terms of
                    Sale or Cove’s other terms and policies; (iii) troubleshoot problems
                    with your account or System (iv) resolve a dispute; (v) collect a debt
                    you owe to Cove, or any third-party providing Services to you ; or (vi)
                    as otherwise necessary to service your account or enforce these Terms
                    of Sale, our policies, applicable law, or any other agreement we may
                    have with you.
                </a>
            </p>
            <p>
                The ways in which you may provide us a telephone or mobile number or email
                address include, but are not limited to, (1) providing the information to
                us at the time you (a) create your customer account, (b) make a purchase
                from us, or (c) you enter into an agreement with us, including a Retail
                Installment Agreement, if applicable; (2) by adding the information to your
                account at a later time; (3) providing it to one of our customer service
                representatives; (4) providing it to our affiliates, subcontractors, or any
                and all other companies that we may have to transfer your account to; or
                (5) by contacting us or our affiliates, subcontractors, or any and all
                other companies that we may have to transfer your account to from that
                phone number or email address. If a telephone number provided to us is a
                mobile telephone number, you consent to receive calls and SMS or text
                messages at that number. Standard telephone minute and text charges may
                apply if we contact you. You acknowledge that your authorization and
                consent for Cove to contact you via phone or email is given as
                bargained-for consideration of these Terms of Sale, Cove’s providing of its
                Services and access to the Sites, its creation of your account and/or your
                Retail Installment Agreement, if applicable, and as such cannot be revoked
                by you without the mutual consent or agreement of Cove. You further agree
                that all consents provided in this section will survive termination or
                expiration of this agreement.
            </p>
            <p>
                9. <strong><u>Additional Products and Services</u></strong>. You
                acknowledge that you have selected the Products that comprise your System
                and the Services relating thereto based on your personal considerations,
                such as cost, the condition of your Premises, insurance requirements, etc.
                You understand that additional Products and Services, at an additional
                cost, may provide increased detection. You agree that any additional
                Products and Services you later purchase from Cove shall be subject to
                these Terms of Sale. You also agree to pay Cove for such additional
                Products or Services. You understand that Cove does not provide any
                installation or repair services for the System, except as expressly set
                forth in these Terms of Sale. You shall provide and maintain adequate power
                for all equipment relating to your System, including batteries as discussed
                below.
            </p>
            <p>
              10.&nbsp;
              <strong>
                <u>Customer’s Duty to Verify Compatibility of Products and Services</u>
              </strong>
              . You acknowledge that prior to making your purchase of any of the Products
              and Services from Cove, you have verified the compatibility of the Products
              and/or Services with other equipment in your home, such as ensuring that
              the cellular signal received at your Premises is sufficiently strong to
              communicate with the Cove panel/digital communicator of your security or
              life safety System or that your heating, ventilation and air conditioning
              (“HVAC”) system is compatible with an automated thermostat Product or home
              automation System provided by Cove. You are solely responsible for
              determining the compatibility of the Products with other equipment in your
              home, and you accept that lack of compatibility is not a valid claim under
              the warranty provided by Cove with the Products and/or Services purchased
              from Cove and does not otherwise constitute a basis for receiving a refund
              after the 60-day Refund Period described below.
            </p>
            <p>
              11.&nbsp;
              <strong>
                <u>
                  Nature of the Products; Installation; Testing and Ensuring
                  Monitoring (If Applicable)
                </u>
              </strong>
              . You acknowledge that the Products involve a do-it-yourself installation
              and that Cove has no way to verify that the Products (sometimes
              collectively referred to herein as the “System”) are properly installed and
              tested at your Premises prior to any incident. You agree to self-install
              the System you purchase from Cove at your Premises and to follow the
              instructions provided by Cove in performing your installation of the
              System. You acknowledge that you understand that the Products (other than
              the Cove panel/digital communicator) are not connected to the electrical
              system of your Premises and require batteries to operate. THE PRODUCTS WILL
              NOT OPERATE, AND THE ALARM WILL NOT SOUND IF THE BATTERIES ARE LOW OR DEAD.
              It is your sole responsibility to maintain and replace the batteries of all
              component Products of the System. You agree to periodically test your
              System, at least monthly, observe your System, be aware of its operational
              status in accordance with the operating instructions and contact Cove to
              request assistance, if needed. In addition, as part of the installation
              process of the System, you are also solely responsible for ensuring that
              when applicable (i) the Internet connection speed at your Premises is
              sufficiently fast to allow for full functionality of the System and each of
              its component Products, particularly the streaming of video feeds from each
              of the System’s remote video cameras (if any are purchased by you), while
              your other wireless devices are in use at your Premises; and (ii) as
              further described below, the cellular signal reception at your Premises is
              continuous, uninterrupted and strong enough to provide a constant
              transmission signal from the System’s panel/digital communicator to the
              central monitoring station maintained by a professional monitoring company,
              in the event you subscribe to Cove’s alarm Monitoring Services (as
              described below in Section 24).
            </p>
            <p>
                You understand that there may be laws, such as state statutes or local
                ordinances, enacted in the jurisdiction of your Premises, which are
                applicable to where and how to install your System. You acknowledge and
                agree that you are responsible for checking before installing any Cove
                Product that you are in compliance with all relevant laws in your
                jurisdiction. Cove is not responsible for any injury or damage caused by
                your installation of any of its Products or obligated to repair, restore,
                or redecorate the Premises in the event any Product is removed from the
                Premises.
            </p>
            <p>
                If you wish to have your System professionally installed, you can hire, at
                your expense, a licensed installer of your choice to install your System
                for you. If available in your area, Cove will provide you with access to a
                communications platform for enabling the connection between individuals
                seeking to obtain installation services and individuals seeking to provide
                installation services in your area. These installers are not employees of
                Cove and are not affiliated with Cove. Although Cove may assist in putting
                you in contact with these installers to perform a professional installation
                of your System, Cove is not responsible for any conduct of, or liability
                associated with, these installers. You should do your own due diligence of
                the installers to select one that best fits your needs and work out a price
                beforehand of the costs the installers will charge you to install your
                System.
            </p>
            <p>
                You may be able to utilize your existing alarm equipment with the Cove
                System if a component is in good working order and compatible with the Cove
                System and central monitoring station. Cove does not guarantee the
                compatibility of any of its Products with your existing alarm equipment and
                you are solely responsible for determining whether Cove’s Products are
                compatible with your existing alarm equipment before purchasing any Cove
                Products for use with your existing equipment. Cove also assumes no
                liability, and extends no warranty, for the use of any equipment or
                component not provided by Cove.
            </p>
            <p>
              12.&nbsp;
              <strong>
                <u>Cove’s Product Return and Services Cancellation Refund Policy</u>
              </strong>
              .
            </p>
            <ol type="a">
              <li>
                <p><strong>Refund within 60 Days after purchase.</strong> If, for any
                reason, you decide you want to return or cancel any Product(s) and/or
                Services you purchased from Cove for a full refund, including a refund of
                all Membership Fees, if any, and fees for Services Cove has provided to
                you, you must notify us no later than sixty (60) days following your date
                of purchase (the “60-Day Refund Period”) and also ship the Product(s) you
                want to return to us no later than the 60-Day Refund Period. To initiate
                any return, you must obtain an Equipment Return Authorization from Cove by
                completing the required information at
                <a href="http://www.covesmart.com/myaccount">
                    www.covesmart.com/myaccount
                </a>
                or contacting Cove customer support at 855-268-3669. After you have
                provided the required information on the website or to Cove customer
                support, you will receive an email from Cove with the return instructions
                you must follow to receive your refund. In your return shipment, you must
                include the Equipment Return List provided with the email which lists the
                products you are authorized to return. You must return all Products on that
                list AND any and all Products you received at your time of purchase as
                promotional Products (“Promotional Products”), if any, to Cove. To receive
                a full refund for any Product(s) you wish to return, you must ship your
                Product(s), all Promotional Products and any other materials, such as
                operation manuals and the Cove yard sign, provided to you with the
                Product(s) prior to the expiration of the 60-Day Refund Period. Upon
                receipt of all required returned Product(s) and materials, including
                Promotional Products, if any, Cove will refund to you the actual price you
                paid for the Product(s). You will not receive a refund for any missing or
                damaged Product(s) or Promotional Products or for any Product(s) shipped
                after the 60-Day Refund Period deadline. If you do not have free shipping
                on your account, and use the prepaid shipping label included with the
                return instructions, the cost of shipping your return will be deducted from
                any refund due you. Cove will process the refund owed to you as soon as
                possible but in no event more than 30 days from the date of receipt by Cove
                of the returned Product(s).
                </p>
              </li>
              <li>
                <p>
                <strong>Refund on Products within one year after purchase. </strong>If
                this benefit was offered to you at the time you purchased your Products, it
                will be indicated in your account in your customer portal and the
                applicable addendum to these Terms of Sale will be available in your
                customer portal regarding the terms and conditions for a return of Products
                within one-year of purchase at
                <a href="http://www.covesmart.com/myaccount">
                    www.covesmart.com/myaccount
                </a>
                .
                </p>
              </li>
              <li>
                <p>
                <strong>Additional requirements for receiving refunds</strong>. To
                receive a refund in accordance with the terms listed above, ensure that the
                Product(s) you are returning is repackaged with all the cords, adaptors,
                components, and documentation that were included when you received the
                Product(s). Unless a Product is faulty or not as described, you will be
                responsible for all shipping costs associated with returning the Product to
                Cove (unless you have free shipping on your account). If you purchase a
                Bundle (multiple Products sold together at a discount), Cove will not
                provide a refund if you return only part of the Bundle, and you must return
                all of the Products sold together in that Bundle in order to receive any
                refund. Cove may reduce the amount of your refund to reflect any reduction
                in value of the Product, as determined by Cove in its sole reasonable
                discretion, caused by your uninstallation of the Product(s) and/or handling
                or damage during return shipping due to your packaging of the Products.
                </p>
              </li>
            </ol>
            <p>
                13. <strong><u>Product Exchanges</u></strong>. If you received the wrong
            Product, please reach out to Cove via phone at 855-268-3669 or email at    <a href="mailto:support@covesmart.com">support@covesmart.com</a> within
                thirty (30) days of purchasing your order. We will review your order to
                find the issue, and send to you the correct Product at no additional cost.
                We will also cover the shipping cost if we ask you to send back the
                incorrect Product to us. If return is requested, you must ship the
                incorrect Product to Cove within fourteen (14) days of receiving the email
                from Cove with instructions how to return the Product or you will be
                charged the cost of the Product.
            </p>
            <p>
            14. <strong><u>Limited Warranty for Defective or Faulty Products</u></strong>.
                If any Product you receive in your order from Cove is faulty or defective
                or becomes faulty or defective within twelve (12) months of your purchase
                date of the Product or thirty-six (36) months if you have an active Service
                Plan at the time a Product becomes faulty or defective (each the “Limited
                Warranty Period”), then after receiving notification from you via phone at
                855-268-3669, Cove will mail a replacement Product to you at no additional
                cost to you. Cove will also send you an email with return instructions and
                a prepaid shipping label to return the defective or faulty Product(s). In
                the event you fail to ship the defective or faulty Product(s) to Cove
                within 14 days of receiving the email with the return instructions, Cove
                may charge you for the full cost normally charged by Cove for the
                unreturned Product(s). Any amount due will be charged to your credit/debit
                card on file by the next bill date that is/was used for your Service Plan.
                If you obtain a subscription to a Service Plan that has a lifetime limited
                warranty at any time within the Limited Warranty Period, you shall have a
                lifetime limited warranty (the “Lifetime Limited Warranty”) on all Products
                you purchase from Cove for the entire period you maintain your subscription
                to such Service Plan after the Limited Warranty Period. However, if you
                cancel your subscription to a Service Plan with a Lifetime Limited Warranty
                any time after the Limited Warranty Period, then upon such cancellation the
                Lifetime Warranty on Cove’s Products shall immediately expire.
            </p>
            <p>
                Cove may use reconditioned parts or components in providing replacement
                parts or components to you under the Limited Warranty, but Cove shall
                warrant any replacement parts or components provided to you only for the
                remainder of the applicable Limited Warranty Period or Lifetime Limited
                Warranty. If, after the Limited Warranty Period or expiration of the
                Lifetime Warranty, as explained above, any Product becomes defective or
                faulty, Cove will replace the defective or faulty Product(s) with new
                Product(s) at Cove’s then-current prices for such Product(s) plus any
                applicable taxes and the cost of shipping the Product(s) to you (if you do
                not have free shipping on your account). Notwithstanding the preceding,
                Cove shall have no obligation during the Lifetime Limited Warranty, if
                applicable, or Limited Warranty Period, or thereafter to replace batteries
                or any part of the Products that is rendered defective due to acts of God,
                any casualty, vandalism, fire, lightning, flood, water, intrusion,
                electrical surges, your negligence, alterations or attempted unauthorized
                repair service not performed by Cove, misuse, tampering, abuse, accidents,
                improper installation of the System or any part or component of the
                Products that comprise the System by you that is not in accordance with
                instructions provided by Cove.
            </p>
            <p>
                15. <strong><u>U.S. Sales Only</u></strong>. Purchases of Products and/or
                Services from Cove are, at present, available only in the United States.
                You agree not to use or attempt to use any Cove Product or Service from
                outside of the United States or for any illegal or unlawful purpose.
            </p>
            <p>
                16. <strong><u>Camera</u></strong>. If your System includes any camera or
                any other video-related equipment (collectively, the “Camera”), then with
                respect to the Camera, you acknowledge, understand and agree that (i) the
                Camera is intended to assist you, Cove and the Monitoring Company in the
                verification of alarm events at your Premises, not to reduce or eliminate
                any risk of loss, (ii) the Camera is not intended to detect or prevent
                unauthorized intrusion onto your Premises or any other emergency condition,
                including fire, smoke, carbon monoxide, medical emergencies or water
                damage, (iii) you will use the Camera solely in connection with lawful
                recording practices on or near your Premises that at all times comply with
                these Terms of Sale, and no other purpose, (iv) you shall not use the
                Camera, or permit the use of the Camera, for any illegal or unlawful
                purpose, (v) you shall not use or permit the use of a Camera installed with
                a view where any person may have a reasonable expectation of privacy,
                including restrooms, dressing or changing areas, locker rooms or similar
                areas, (vi) you shall instruct all persons who may use the Camera of any
                limitations with respect to the Camera, (vii) you shall notify any person
                whose oral communication may be intercepted, recorded or transmitted by the
                Camera of any such interception, recording or transmission, and (viii) when
                and to the extent restricted or otherwise prohibited by applicable laws,
                YOU SHALL NOT INTERCEPT, RECORD OR TRANSMIT ANY ORAL COMMUNICATION OF ANY
                PERSON WITHOUT HAVING SUCH PERSON’S PERMISSION TO DO SO. Please refer to
                Cove’s Privacy Policy at www.covesmart.com/privacypolicy for important
                information regarding the recording of audio or video.
            </p>
            <p>
                17. <strong><u>Sales to End Users Only</u></strong>. Purchases made through
                Cove’s website or any web app or mobile app are for retail end-user
                customers only. Sales to dealers, resellers or distributors or any other
                third-party are currently prohibited.
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
            18. <strong><u>Availability and</u></strong>    <u> <strong>Pricing</strong></u>. All products offered at Cove’s website
                are subject to availability and Cove reserves the right to impose quantity
                limits on any order of Products, to reject all or part of an order, and to
                discontinue offering certain Products and/or Services without prior notice.
                If any Service is discontinued, you will not be billed any new charges for
                that Service.
            </p>
            <p>
                19. <strong><u>Prices</u></strong>. To finalize your order of Products
                and/or Services, including your subscription to a Service Plan or the
                Premier Membership Plan, if any, you will be required to pay, at the time
                you order, a total price consisting of the Membership Fee (as described in
                Section 22 below), if selected, the Products in your order, and the first
                month of your Monthly Subscription Fee (as described in Section 24 below),
                if any, less any discounts offered plus any applicable sales tax and
                shipping charges. Cove reserves the right to change, at any time, prices
                for Products and Services offered, and does not provide refunds in the
                event of a future price drop or promotional offering, or price protection
                on the monthly subscription rate for your Service Plan unless the Service
                Plan you have selected includes lifetime price protection on the monthly
                subscription rate for your Service Plan. If Cove increases the Monthly
                Subscription Fee for your Service Plan, we will send you advance notice by
                email to the email address on file in your customer account. In the event a
                Product or Service Plan is listed at an incorrect price due to
                typographical error or error in pricing information received from our
                suppliers, we shall have the right to refuse or cancel any orders placed
                for Products or Services listed at the incorrect price. We shall have the
                right to refuse or cancel any such orders whether or not the order has been
                confirmed and your credit or debit card charged. If your credit or debit
                card has already been charged for the purchase and your order is canceled,
                we shall immediately issue a credit to your credit or debit card account in
                the amount of the incorrect price.
            </p>
            <p>
                20. <strong><u>Sales Tax</u></strong>. Sales taxes, if applicable for your
                Premises, will be added to your purchase(s) of Products and/or Services
                from Cove’s Sites based on the address of your Premises and the sales tax
                rate in effect at the time your transaction is completed. If the sales tax
                rate for your Premises changes before the Products are shipped, the rate in
                effect at the time your order was received will apply. You are responsible
                for all applicable taxes, and Cove has the right to collect any tax it
                believes it is obligated to collect.
            </p>
            <p>
                21. <strong><u>Shipping and Delivery</u></strong>. Prices for the Products
                do not include shipping costs. Our delivery charges and methods are as
                described on <a href="http://www.covesmart.com">www.covesmart.com</a>,
                which may change from time to time. Title for Products you purchase passes
                to you at the time of delivery by Cove to the freight carrier, but Cove
                and/or the freight carrier will be responsible for any Product loss or
                damage that occurs when the Product is in transit to you. The estimated
                arrival or delivery date is not a guaranteed delivery date for your order.
                Refused deliveries will be returned to our warehouse. It may take up to 60
                days for the returned items to be identified as refused and processed for a
                refund. If you have any questions about a refund for a refused delivery,
            you may email customer support at    <a href="mailto:support@covesmart.com">support@covesmart.com</a> or call
                855-268-3669.
            </p>
            <p>
                22. <strong><u>Premier Membership</u></strong>. Cove offers a Premier
                Membership plan (the “Premier Membership Plan”) for a set cost to be paid
                in full up front (the “Membership Fee”), which will provide you with
                special benefits, discounts, and/or services. If purchased, the Premier
                Membership Plan has a term of five (5) years, unless cancelled by you (as
            described below). Details about the Premier Membership Plan can be found at    <a href="http://www.covesmart.com">www.covesmart.com</a>/membership. The
                benefits, discounts and/or services of the Premier Membership Plan may be
                modified by Cove from time-to-time at Cove’s sole discretion. Nevertheless,
                if any benefit, discount, or service is removed by Cove from the Premier
                Membership Plan after the date you pay the Membership Fee, you will
                continue to receive the same or equivalent benefits, discounts, and/or
                services for the entire term of the Premier Membership Plan even after
                removal by Cove. In addition, if any new benefits, discounts, or services
                are added to the Premier Membership Plan, Cove may, at its sole discretion,
                provide such to you at no additional charge.
            </p>
            <p>
                23. <strong><u>Service Plans Offered by Cove</u></strong>. Cove offers
                three (3) separate service plans (each a “Service Plan” or collectively the
                “Service Plans”) to you and its other customers. Each Service Plan provides
                Monitoring Services (as described below).
            </p>
            <ol type="a">
              <li>
                <p><strong>Types of Service Plans</strong>. The Service Plans offered by
                Cove consist of the following:
                </p>
                <ul>
                  <li>
                    <p><em>Basic Service Plan</em> – See Cove’s website for details on the
                    features, services, and/or benefits of the “Basic Service Plan.”
                    </p>
                  </li>
                  <li>
                    <p><em>Value Service Plan</em>
                    – See Cove’s website for details on the features, services, and/or benefits
                    of the “Value Service Plan.”
                    </p>
                  </li>
                  <li>
                    <p>
                    <em>Smart Service Plan</em>
                    – See Cove’s website for details on the features, services, and/or benefits
                    of the “Smart Service Plan.”
                    </p>
                  </li>
                </ul>
                <p>
                The features, services and/or benefits of each Service Plan may be modified
                or removed by Cove from time-to-time at Cove’s sole discretion, except for
                the providing of Monitoring Services. Nevertheless, if any feature,
                service, or benefit of the Service Plan to which you subscribed is removed
                by Cove after the date you subscribed to the Service Plan, you will
                continue to receive the same or equivalent features, services, and/or
                benefits after they are removed or modified from that Service Plan for the
                entire period you pay for the Service Plan. In addition, if any new
                features, services, or benefits are added to a Service Plan, Cove may, at
                its sole discretion, provide such to you at no additional charge.
                </p>
              </li>
              <li>
                <strong>Cancelling Your Service Plan. </strong>Excluding the obligations
                you owe to Cove to maintain a Service Plan in connection with your Retail
                Installment Agreement, if applicable, you may cancel your Service Plan at
                any time by cancelling your subscription to the Service Plan in your
                customer portal at
                <a href="http://www.covesmart.com/myaccount">
                    www.covesmart.com/myaccount
                </a>
                or by calling Cove at 855-268-3669. Step-by-step instructions are also
                available at <u>support.covesmart.com</u>. Upon receiving your request to
                cancel, Cove will provide to you notice of termination of your Service Plan
                by email sent to the email address on file with Cove for your customer
                account. Your Service Plan, which includes Monitoring Services (as defined
                below), will terminate at the end of your current prepaid monthly
                subscription term. Upon termination of a Service Plan, Cove shall have no
                further obligation to provide the Services applicable to your Service Plan,
                and you shall have no further obligations to Cove, except those you owe to
                Cove under a Retail Installment Agreement, if applicable, and your
                obligation to pay any monies owed for Services rendered but not paid for by
                you as of the date of termination. Notwithstanding the foregoing, Cove
                shall refund any unearned Services charges with respect to any full
                calendar month following any termination where the Services advances for
                such month were paid by you in full for such month. Cove shall not refund
                any unearned Services charges with respect to any partial calendar month
                following any termination. There are no termination fees. Subject to your
                obligations under a Retail Installment Agreement, if applicable, you may
                terminate your Service Plan for any reason or no reason by following the
                process set forth in this subsection. If you later choose to re-subscribe
                to a Service Plan, then you will receive the features, services, and/or
                benefits offered by Cove for that Service Plan at the time you
                re-subscribe, which may differ from those you received at the time you
                originally subscribed to that Service Plan before termination.
              </li>
            </ol>
            <p>
                24. <strong><u>Monitoring Services</u></strong>. If you choose to purchase
                and subscribe to any of Cove’s Service Plans, you will receive monitoring
                services from Cove which includes monitoring your home security/intrusion
                System, your life safety System, and medical devices, where applicable, and
                notifying you and/or your emergency contacts (“Emergency Contacts”), and
                relevant governmental authorities (“Authorities”), as more fully discussed
                below, of any alarm codes triggered in these Systems depending on the
                Products you purchase from Cove (“Monitoring Services”). Cove will cause a
                professional monitoring company (“Monitoring Company”) of our choosing to
                provide monitoring center signal receiving and notification services with
                respect to your Premises. If you purchase Cove’s Monitoring Services, you
                agree to be bound by all conditions that apply to professionally monitored
                customers as set forth in these Terms of Sale below and as dictated by the
                Monitoring Company. In the event you choose to self-monitor your Premises
                using the Products and not purchase, suspend, or otherwise forego the
                Monitoring Services offered by Cove, you agree that you assume full
                responsibility for any damages caused by your failure to have your Premises
                monitored. Cove requires a month-to-month commitment from you for
                Monitoring Services until and unless terminated in accordance with
                subsection 25. c. below. When you purchase Monitoring Services with your
                initial purchase of Products and your Service Plan, you must pay the
                monthly rate for your Service Plan in advance for the upcoming month. For
                each month you receive Monitoring Services, you agree to pay each month in
                advance the monthly subscription rate applicable to the Service Plan you
                have chosen plus applicable governmental fees and taxes (the “Monthly
                Subscription Fee”) in addition to amounts you owe under your Retail
                Installment Agreement, if applicable, to Cove. Your Monitoring Services
                will begin once you have completed the installation of your System by
                following the on-screen instructions on your Cove panel/digital
                communicator. When your installation is complete, your System will then be
                placed on a two-hour testing period for you to become familiar with your
                System without triggering false alarms. After that testing period ends,
                your Monitoring Services will be activated. You will be given 15 days of
                free Monitoring Services from the date you purchase your System and Service
                Plan to provide you with ample time to install your System. Your monthly
                subscription term paid for by your Monthly Subscription Fee will begin at
                the end of that 15-day period no matter when the Monitoring Company
                actually begins to provide your Monitoring Services. You will receive
                continuing Monitoring Services as part of your Service Plan and you will be
                billed on the Payment Due Date – the monthly anniversary of the purchase
                date for your Service Plan for each successive monthly subscription term
                thereafter until and unless you cancel your Service Plan and Monitoring
                Services. Accordingly, your Payment Due Date for the Monthly Subscription
                Fee is the monthly anniversary of when you purchased your System although
                your Monitoring Services run month-to-month from the 16<sup>th</sup> day
                after you make your purchase. You may cancel your Monitoring Services at
                any time but you will owe the cost of, and continue to receive, Monitoring
                Services for the entire remaining period of the then-current monthly
                subscription term following cancellation. We may impose a late charge on
                each payment of the Monthly Subscription Fee owed for any month you use or
                subscribe to Monitoring Services that is not paid within fifteen (15) days
                of the date due equal to the lesser of (i) the maximum amount permitted by
                law, and (ii) interest as of the due date at the rate of 1.5% per month
                (18% per year). The provisions of this Section are subject to the Product
                Return and Services Cancellation Refund Policy provisions of this
                Agreement.
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
                If you elect to receive Monitoring Services from Cove, then to ensure
                effective monitoring of your System, you must cooperate with Cove and the
                Monitoring Company and implement certain safeguards. As may be further
                referenced in these Terms of Sale, you agree to (i) read all
                operations/user’s manuals for your System, and to operate and maintain the
                System according to those instructions; (ii) test the System as needed, or
                at a minimum monthly, and to notify Cove immediately if you find anything
                wrong; (iii) replace batteries in the System components as necessary; (iv)
                not tamper with, disturb, damage, remove, or interfere with the System or
                allow anyone else to do so; (v) keep the System and its components in the
                same location as originally installed by you; (vi) avoid doing anything
                that might damage the System or that might cause false alarms; (vii) keep
                your information, including Emergency Contacts (defined below) information,
            updated of any changes by notifying Cove in writing by emailing    <a href="mailto:support@covesmart.com">support@covesmart.com</a> or by
                making changes using your customer portal at
                <a href="http://www.covesmart.com/myaccount">
                    www.covesmart.com/myaccount
                </a>
                ; and (viii) pay any fines that result from false alarms.
            </p>
            <p>
                25. <strong><u>Central Station Monitoring</u></strong>. Upon receipt of a
                signal from your System, Cove and/or the Monitoring Company will make every
                reasonable effort to notify you and the appropriate municipal police or
                fire department depending upon the type of signal received. Not all signals
                will require notification to the Authorities and you may obtain a written
                response policy from Cove upon request. No response shall be required for
                supervisory, loss of electric or communication pathway, trouble or low
                battery signals. You acknowledge that signals which are transmitted over
                high speed Internet, cellular, or other modes of communication pass through
                communication networks wholly beyond the control of Cove and the Monitoring
                Company and are not maintained by either Cove or the Monitoring Company,
                and neither Cove nor the Monitoring Company shall be responsible for any
                failure or interruption in any such networks which prevents transmission
                signals from reaching the central station monitoring center operated by the
                Monitoring Company or damages arising therefrom, or for data corruption,
                theft or viruses to your computers if connected to the alarm communication
                equipment of your System. You acknowledge that Cove does not represent or
                warrant that your System may not be compromised or circumvented, including
                by hacking or otherwise.
            </p>
            <ol type="a">
              <li>
                <p>
                <strong>Emergency Contact Information</strong>. You agree to furnish
                Cove with a written call list of names and telephone numbers of those
                persons you wish to receive notification of alarm signals (“Emergency
                Contacts”). You agree to provide Cove with up-to-date information for your
                Emergency Contacts as necessary on an ongoing basis to enable such
                notification. Cove and the Monitoring Company are entitled to rely solely
                on the Emergency Contacts information provided in writing by you to Cove.
                Unless otherwise provided in the call list, Cove and/or the Monitoring
                Company will make a reasonable effort to contact the first person reached
                or notified at the Premises or on the list of Emergency Contacts either via
                the Cove panel/digital communicator, telephone/cellular phone call, text or
                email message. No more than one call to a person on the Emergency Contacts
                list shall be required and any form of notification provided for herein,
                including leaving a message on an answering machine, shall be deemed
                reasonable compliance with Cove’s and/or the Monitoring Company’s
                notification obligation. All changes and revisions to your Emergency
                Contacts list shall be supplied to Cove in writing by emailing    <a href="mailto:support@covesmart.com">support@covesmart.com</a> or using
                your customer portal at
                <a href="http://www.covesmart.com/myaccount">
                    www.covesmart.com/myaccount
                </a>
                .
                </p>
              </li>
              <li>
                <p>
                <strong>
                    Authorization to access panel to program and/or monitor video/audio
                    devices to confirm alarm condition
                </strong>
                . You authorize Cove and/or the Monitoring Company to access the Cove
                panel/digital communicator of your System to input or delete data and
                programming. If the Products purchased by you from Cove contain video or
                listening devices permitting the Monitoring Company’s central office to
                monitor video or sound, then, upon receipt of an alarm signal, the
                Monitoring Company’s central station shall monitor video or sound for so
                long as its central station, in the Monitoring Company’s sole discretion,
                deems appropriate to confirm an alarm condition.
                </p>
              </li>
              <li>
                <p>
                <strong>Termination of Monitoring Services</strong>. Cove may, without
                prior notice, suspend or terminate its services, in event of (i) your
                default in performance of these Terms of Sale, or any obligation under a
                Retail Installment Agreement, if applicable, including, without limitation,
                your Monthly Subscription Fee payment obligation; (ii) the Monitoring
                Company’s central station’s facility or communication network becomes
                nonoperational; or (iii) your System is sending excessive false alarms. The
                Monitoring Company’s central station is authorized to record and maintain
                audio and video transmissions, data and communications, and shall be the
                exclusive owner of such property. All of your information and data shall be
                maintained confidentially by Cove and the Monitoring Company. As referenced
                above, if you elect to receive Monitoring Services, you agree to regularly
                check and test your System, at least monthly, to confirm that your System’s
                transmission signals are linked to the Monitoring Company’s central station
                monitoring center and/or communication network and notify Cove if there is
                any interruptions, failures, or other issues with the System’s transmission
                signals.
                </p>
              </li>
            </ol>
            <p>
                26. <strong><u>Contact Information</u></strong>. With respect to any phone
                number or other contact information you provide to Cove at any time,
                whether for purposes of alarm notification through Monitoring Services,
                general billing, or any other purpose, you represent that you are the
                subscriber associated with the phone number, email address or other contact
                information provided, or that you are otherwise expressly authorized by the
                person or persons associated with such phone number, email address, or
                other contact information to provide such information and use it as your
                own. You also expressly authorize Cove to contact you using an automated
                calling device, text, or email at such phone number, email address or other
                contact information, which you acknowledge and agree shall be provided for
                all purposes related to servicing or administering your account with Cove,
                including billing, under these Terms of Sale or, if applicable, a Retail
                Installment Agreement.
            </p>
            <p>
                27. <strong><u>Permits</u></strong>. Your municipality may require a
                license or permit or the payment of taxes in connection with your
                installation, use or monitoring of your System by the Monitoring Company.
                You are solely responsible for complying with such obligations and
                providing Cove with any then current license or permit number you receive.
            </p>
            <p>
                28. <strong><u>Emergency Dispatch Service</u></strong>. “Emergency Dispatch
                Services” shall be provided in accordance with these Terms of Sale and
                consist solely of Monitoring Company personnel telephoning the Authorities
                or other Emergency Contacts provided by you or any company that provides
                on-site response services (“Third-Party Responders”) upon the receipt of
                alarm signals from your System reporting specific conditions (“Listed
                Codes”) at the Premises. We shall provide Emergency Dispatch Services only
                for Listed Codes. Cove’s obligation to provide Emergency Dispatch Services
                shall be satisfied by Monitoring Company personnel contacting (or
                attempting to contact) the Authorities or Emergency Contacts or Third-Party
                Responders or by leaving a voicemail or similar type message with the
                Authorities or Emergency Contacts or Third-Party Responders. Emergency
                Dispatch Services are intended to reduce the risk of a burglary, robbery or
                other events occurring at the Premises but are not a guarantee such events
                will not occur or that there will be no personal injury or property loss as
                a result. The Monitoring Company will not contact (nor attempt to contact)
                any Third-Party Responder on your behalf unless you have specifically
                contracted with us and are current on your payments to provide Monitoring
                Services to you or you have previously requested that we provide such
                service (and we have agreed in writing to do so). Examples of where you
                might desire that the Monitoring Company attempt to contact a Third-Party
                Responder include situations (i) where the Premises are located in a
                jurisdiction in which the applicable Authorities will not respond to alarm
                signals at the Premises absent prior verification of an actual alarm event,
                or (ii) where you desire a faster response time than what might otherwise
                be provided by the applicable Authorities. Regardless of the circumstances,
                however, you acknowledge that, upon receipt of alarm signals from your
                System, the Monitoring Company will not contact (nor attempt to contact),
                nor have any obligation to contact, any Third-Party Responder unless you
                have previously contracted with us to provide such service or you have
                previously requested that we provide such service (and we have agreed in
                writing to do so).
            </p>
            <p>
                29. <strong><u>Alarm Verification Prior to Dispatch</u></strong>. Upon
                receipt of a Listed Code and before calling any Authorities or Emergency
                Contacts or any Third-Party Responder, Monitoring Company personnel may, in
                their sole discretion, take any one or more of the following steps in an
                attempt to verify the need to report the Listed Code to the Authorities or
                any of the Emergency Contacts or any Third-Party Responder, (collectively,
                the “Alarm Verification Steps”): (i) telephone or attempt to telephone the
                Premises, (ii) if we have access to Real-Time Services, receive, retrieve
                and review video from the System, (iii) intercept or retrieve and listen to
                oral communications or other audio from the System; or (iv) undertake such
                other reasonable steps to verify the need to report the Listed Code.
                Following any one or more of the Alarm Verification Steps, Monitoring
                Company personnel may, in their sole discretion, determine to report (or
                not report) a Listed Code to the Authorities or any of the Emergency
                Contacts or any Third-Party Responder. In addition, if monitoring facility
                personnel are unable to verify the need to report a Listed Code to the
                Authorities or any of the Emergency Contacts or any Third-Party Responder,
                Monitoring Company personnel shall have no obligation to report such Listed
                Code. Monitoring Company personnel shall have no obligation to review or
                monitor any audio or video from the System for any time that is not
                immediately before or after receipt of a Listed Code.
            </p>
            <p>
                30. <strong><u>Alarm Cancellation</u></strong>. Upon receipt of any current
                cancellation code set in accordance with the owner’s manual for your
                System, via advice from any Emergency Contact responding to a text message
                sent to Emergency Contacts, or oral advice (confirmed by safe word) to
                disregard the receipt of a Listed Code, Monitoring Company personnel may,
                in their sole discretion, determine not to report a Listed Code to the
                Authorities or any of the Emergency Contacts or any Third-Party Responder.
            </p>
            <p>
                31. <strong><u>Communication to Authorities</u></strong>. You understand
                that your System signal shall be via cellular or satellite transmission.
                You understand that Cove and/or the Monitoring Company does not receive
                signals when the transmission mode is, or becomes, non-operational and that
                the signals to/from the Cove panel/digital communicator cannot be linked to
                the Monitoring Company’s central station monitoring center if the
                transmission mode is interfered with, damaged, or otherwise rendered
                inoperative and/or if the cellular signal at your Premises is interrupted
                or too weak for a transmission signal to be sent or received by the digital
                communicator. You acknowledge that Cove does not represent or warrant that
                the System will prevent any loss by burglary, theft, robbery, fire, or
                otherwise; or that the System will in all cases provide the protection for
                which it is installed or intended. You further understand that Cove assumes
                no liability for failure of the System as a result of the transmission mode
                becoming non-operational as it is your sole responsibility to (i) confirm
                that the cellular signal at your Premises is sufficiently strong and
                continuous to ensure non-interruption of transmission by your System; and
                (ii) test your System periodically, at least monthly, to confirm that the
                System’s transmission signals are linked to the Monitoring Company’s
                central station monitoring center and/or communication network; and (iii)
                notify Cove if there is any interruptions, failures, or other issues with
                your System’s transmission signals. You acknowledge and agree that Cove’s
                and/or the Monitoring Company’s sole responsibility upon receipt of a
                medical emergency signal transmitted from the panel is to call by telephone
                the medial assistance providers as directed by you. You understand and
                agree that Cove and all Cove Parties (as defined below in Section 42) are
                hereby released from all liability due to active or passive, sole, joint or
                several negligence of any kind or degree of Cove or any other Cove Party
                which you, or anyone claiming through you, in any way might or could claim
                against Cove or such Cove Party based upon, arising out or from, in
                connection with, resulting from, related to or as a consequence of Cove’s
                or a Cove Party’s failure to contact or improper dispatch of medical
                assistance providers. If Cove or any other Cove Party receives an abort
                message for any transmission from the Cove panel/digital communicator, from
                a person either on or off the Premises, via the Applications or
                electronically from the System prior to notifying the applicable
                Authorities, Cove or the other Cove Parties will not notify such
                Authorities, and Cove or the other Cove Parties will attempt to rescind the
                notification. You understand that existing and future local laws,
                ordinances and policies (collectively, “Policies”) may restrict Cove’s and
                other Cove Parties’ ability to provide the Services. Some Policies may
                require “enhanced verification,” which may, for example, require the
                Monitoring Company’s central station to make a series of calls to confirm
                an alarm event requires police response before the police will respond.
            </p>
            <p>
            32.    <strong><u>False Alarms; Suspension of Services and Shut-Down</u></strong>.
                You agree to prevent false alarms and be solely responsible for false
                alarms. You must pay (or reimburse Cove) any fines, fees, costs, expenses,
                and penalties relating to your System or the Services assessed against you,
                Cove or the Monitoring Company’s central station by any person or entity,
                including court or government agency or any person or entity acting on the
                behalf of such court or agency. If (i) you default under these Terms of
                Sale or a Retail Installment Agreement, if applicable; (ii) these Terms of
                Sale, the Services, including Monitoring Services, or a Retail Installment
                Agreement, if applicable, is terminated by any party for any reason; (iii)
                your System becomes a “runaway” system or excessively signals the
                Monitoring Company’s central station without apparent reason; or (iv) in
                the opinion of the Monitoring Company’s personnel, your System otherwise
                becomes a “problem account,” Cove may suspend the Services, including
                Monitoring Services, and you authorize Cove to disconnect your System from
                the Monitoring Company’s central station. The exercise of any such rights
                shall not be deemed a waiver of Cove’s or any other Cove Party’s right to
                damages. Cove’s obligations under these Terms of Sale are waived
                automatically without notice and you release Cove for all Losses (as
                defined below in Section 45) following any default or breach of these Terms
                of Sale or a Retail Installment Agreement, if applicable, by you or if the
                Monitoring Company’s central station, your System and any of the Services
                are destroyed, damaged, inoperable or malfunction for any reason
                whatsoever, for the duration of such interruption of Service, and you shall
                be entitled to a credit of the unearned charges paid by you for the period
                of interruption on your request, which credit shall not exceed one month’s
                Monthly Subscription Fee and shall be the limit of Cove’s liability. If the
                Services provided to you are suspended or terminated for any reason, Cove
                may, at its sole discretion, without notice and without any liability,
                remotely disable, disconnect or block your System and data from the System
                from communication with the Monitoring Company’s central station.
            </p>
            <p>
                33. <strong><u>Consent to Recording</u></strong>. Certain federal and state
                laws prohibit interception and recording of telephone calls and other oral
                communications by electronic means, including the interception and
                recording of telephone calls and other oral communications by the System at
                your Premises. You, for yourself and any other person contacting Cove or
                the Monitoring Company or whose communication is received from your System,
                whether by Cove or the Monitoring Company (collectively, “Users”), consent
                to the interception, recording, disclosure and use of the contents of any
                telephone call, other oral communications or video in connection with the
                Services. In addition, you shall notify all Users with respect to any such
                interception, recording, disclosure or use. YOU SHALL NOT INTERCEPT OR
                RECORD ANY ORAL COMMUNICATION OF ANY PERSON WITHOUT HAVING SUCH PERSON’S
                PERMISSION TO DO SO. Please refer to Cove’s Privacy Policy at
                <a href="http://www.covesmart.com/privacypolicy">
                    www.covesmart.com/privacypolicy
                </a>
                for important information regarding recording audio or video.
            </p>
            <p>
                34. <strong><u>Video-Related Services</u></strong>. “Video-Related
                Services” consists solely of the following: (i) verification of alarm
                events by monitoring facility personnel in connection with the Emergency
                Dispatch Services to be provided pursuant to Section 28 (“Verification
                Services”) using audio and video received from the System, and (ii)
                real-time access to video and audio from the System through the
                Applications (“Real-Time Services”) in accordance with the terms of the
                Service Plan you selected. Verification Services are intended to assist you
                and any permitted monitoring facility personnel to verify an alarm event at
                the Premises, not to reduce or eliminate any risk of loss. None of the
                Video-Related Services are intended to replace alarm monitoring services or
                to detect or prevent unauthorized intrusion onto the Premises or any other
                emergency condition, including fire, smoke, carbon monoxide, medical
                emergencies or water damage. The Verification Services are provided and
                shall be used by you solely for the verification of alarm events at the
                Premises and no other purpose. Monitoring Company’s personnel will not have
                access to the Real-Time Services unless (1) you have granted the Monitoring
                Company such access through the Applications and (2) such video and audio
                is received at the Monitoring Company in connection with the Emergency
                Dispatch Services.
            </p>
            <p>
                35. <strong>
                    <u>
                        Remote Services Access; Excessive Data Usage; Audio and Video
                        Limitations
                    </u>
                </strong>
                . If any Product or Services, including but not limited to a Service Plan,
                you purchase from Cove provides remote reviewing via Cove’s Sites, the
                Products are designed to transmit data via your high-speed Internet or
                cellular service to remote equipment supplied by Cove or your Internet or
                wireless connection device which is compatible with Cove’s remote services
                and Sites. Cove will grant access to a server permitting you to monitor
                your System, access the System to arm, disarm and bypass zones on the
                System, view the remote video camera(s), if any, and control other remote
                automation devices that may be installed in your Premises by you. The
                remote services server is provided either by Cove or a third party. If you
                purchase cameras, you shall install the camera(s) in a permissible legal
                location in your Premises to permit your viewing. Cove shall have no
                responsibility for failure of data transmission, corruption or unauthorized
                access to the camera data and shall not monitor or view said data. Cove
                shall have no liability for excessive data usage expense incurred by you
                attributable to the Products or Services you purchase from Cove. You
                acknowledge and understand that electronic data may not be encrypted and
                wireless components of your System may not meet Advanced Encryption
                Standard specifications for encryption of electronic data established by
                the US National Institute of Standards and Technology and Cove shall have
                no liability for access to your System, including camera data, by others.
                If audio or video devices are installed in your Premises by you, you
                acknowledge that you have been advised to independently ascertain that the
                audio or video devices are used lawfully. Cove has made no representations
            and has provided no advice regarding the use of audio or video devices.    <strong><u></u></strong>
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
                36. <strong>
                    <u>Lawful Recording of Video and Audio; Required Connectivity</u>
                </strong>
                . Recording video or audio may be unlawful or violate an individual’s
                rights, including privacy rights. You shall not use any of the
                Video-Related Services, or permit the use of any of the Video-Related
                Services, for any unlawful purpose. For example, you shall not use the
                System to obtain or record video in any place where a person may have a
                reasonable expectation of privacy, including restrooms, dressing or
                changing areas, locker rooms or similar areas. You also shall take all
                steps necessary to alert individuals at the Premises of the possibility of
                recording video or audio. You shall use a form of connectivity to permit
                the transmission of video, audio and alarm signals from your System to Cove
                and any Monitoring Company. You shall instruct all persons who may use any
                Video-Related Services or the System of any limitations with respect to the
                Video-Related Services or the System. You shall comply with the provisions
                of this Section and Sections 34 and 35 with respect to the use of the
                Video-Related Services in connection with the System.
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
                37. <strong><u>Interruption or Delay of Services</u></strong>. Cove assumes
                no liability for delays in installation or interruption of any Services,
                including Monitoring Services, due to strikes, riots, floods, fires, acts
                of God or any causes beyond the control of Cove. Cove will not be required
                to supply Services to you during the period of interruption of the Services
                due to any such cause.<strong><u></u></strong>
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
                38. <strong><u>Homeowners Insurance Discount</u></strong>. Homeowners’
                insurance discounts may vary depending on the insurance company. Cove does
                not guarantee any discounts and recommends any inquiries be directed to
                your insurance provider.<strong><u></u></strong>
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
            39. <strong><u>Ownership of Sites, Licenses, and Access</u></strong>    <strong>.</strong>
            </p>
            <ol type="a">
              <li>
                <p>
                <strong>The Sites are owned by Cove</strong>. Cove grants you a limited
                license to access and make personal use of the Sites but does not grant you
                the authority to download or modify any portion of Cove’s proprietary
                information, Cove’s content found on the Sites, or the Sites themselves,
                except for documents available for downloading and printing from your
                customer account, unless you have obtained prior and express written
                consent of Cove. This license does not include any derivative use of the
                Sites or Cove content or any use of data mining, robots, or similar data
                gathering and extraction tools.
                </p>
              </li>
              <li>
                <p>
                <strong>Licenses</strong>. Subject to the terms and conditions of these
                Terms of Sale, Cove grants you a non-exclusive, non-transferable license to
                access and use the Sites by (i) use of the Applications in connection with,
                and solely for the purpose of, controlling and monitoring the Services you
                are authorized to receive and/or control or monitor, and (ii) install and
                use the Applications solely on your own handheld mobile device (e.g.,
                iPhone, iPad, or Android smartphone or other tablet device) and solely for
                the purposes set forth in these Terms of Sale. There is a risk that
                unauthorized persons may gain access to the Applications and data thereon
                and you agree to assume such risk. You consent to our posting alarm events,
                home automation controls and other status reports in connection with the
                Services on the Applications. You will keep confidential all information
                available on the Applications and all passwords relating to the
                Applications or access thereto. This license will continue and be
                co-extensive with the terms and conditions of these Terms of Sale, except
                for your (i) failure to keep confidential all information available on the
                Applications and all passwords or access codes relating to the Applications
                or access thereto, (ii) use of the license or the information in any manner
                that negatively affects us, (iii) use of the license or the information for
                any illegal purpose, (iv) breach of these Terms of Sale or (v) violation of
                any applicable law. You will be solely responsible for information you
                deliver, delete or modify. Upon termination of your Service Plan that
                provides access to the Applications or termination or suspension of the
                license by us, we may immediately, and without notice, disable your access
                to the Applications and cancel all passwords or other access codes. You
                will not (a) disclose or make available to third parties any portion of the
                technology associated with the Services or the Applications without our
                prior written consent, (b) copy, decompile, dissemble, reverse engineer,
                manipulate, modify, or make derivative works of any technology incorporated
                in the Services or the Applications. Cove may from time to time develop
                patches, updates, upgrades or other modifications (“Updates”) to improve
                the performance of the Products, Services or the Applications. These may be
                automatically installed without providing any additional notice or
                receiving any additional consent. You consent to this automatic update of
                the Updates. If you do not want such Updates, your remedy is to terminate
                your Account and stop using the Services or the Applications. You
                acknowledge that you may be required to install Updates to use the Services
                and you agree to promptly install any Updates that Cove provides. IF YOU
                FAIL TO INSTALL ANY UPDATES PROVIDED BY COVE, YOUR ACCESS TO THE
                APPLICATIONS AND THE SERVICES MAY BE TERMINATED.
                </p>
                <p>
                  <strong></strong>
                </p>
                <p>
                  You agree that you will use the Sites only in combination with Cove’s
                  Products and Services or Cove authorized products and services. If you are
                  the manufacturer or distributor or authorized representative of a product
                  or service that is not an authorized product or service, and you wish to
                  request support for your product or service, please send an email to    <a href="mailto:support@covesmart.com">support@covesmart.com</a> to request
                  further information. Cove is not required to acknowledge or respond to any
                  such request, or to engage in or continue any discussions that may result
                  from any such request, but may do so in its sole discretion.
                </p>
                <p>
                  You may not frame or utilize framing techniques to enclose any materials
                  located on the Sites, including, without limitation, any trademark, logo,
                  or other proprietary information (including images, text, page layout, or
                  form) of Cove, third parties, or Cove affiliates without express written
                  consent from Cove. You may not use any of Cove’s tags or any other “hidden
                  text” utilizing Cove’s name or trademarks without the express written
                  consent of Cove. Any unauthorized use terminates any permission or license
                  granted to you by Cove. For purposes of clarity, these Terms of Sale and
                  the license(s) granted to you hereunder    <strong><u>expressly exclude</u></strong> the right to use any content
                  except as made available to you on the Sites. You may not copy or
                  disseminate any content or other materials from the Sites.
                </p>
                <p>
                  You may not use any Cove logo or other proprietary graphic or trademark as
                  part of the link without first obtaining express written permission from
                  Cove. For purposes of clarity, Cove may obtain certain materials and
                  content through a third-party content provider(s) under a license from said
                  provider(s). THE LANGUAGE HEREIN NEITHER INTENDS TO, NOR SHALL IT BE
                  INTERPRETED AS INTENDING TO, GRANT YOU ANY RIGHTS, TITLE, OR INTEREST TO
                  COVE’S SITE MATERIALS OR CONTENT. By using the Sites, you expressly agree
                  that you shall respect the intellectual property rights of all third
                  parties, Cove, and any others who may provide materials and/or other
                  content to the Sites. Cove only displays licensed content obtained from
                  such third-party provider(s) in their original form and as licensed, unless
                  expressly otherwise permitted by the license.<strong></strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>No unlawful or prohibited use</strong>. As an express condition
                  of your use of the Sites, you agree, represent, and warrant that you will
                  not use the Sites for any purpose that is unlawful, violates the rights of
                  any third-party, or is otherwise prohibited by these Terms of Sale. You may
                  not use the Sites in any manner which could damage, disable, overburden, or
                  impair the Sites or the network(s) connected to the Sites or interfere with
                  any other customer’s or party’s use and enjoyment of the Sites.
                </p>
              <p>
                You may not use automated means of any kind to manipulate Cove’s data,
                information or Services provided via the Sites. You may not use automated
                means, including spiders, robots, crawlers, or similar technologies on the
                Sites or in connection with the Sites for any purpose. You may not
                decompile, disassemble, reverse engineer, copy, create derivative works
                from or display any of the Sites’ or Cove’s software code. You may not
                attempt to gain unauthorized access to the Sites, other customer accounts,
                third-party accounts, computer systems, or networks connected to the Sites
                through hacking, password mining, or any other means. You may not upload,
                link to, post or transmit in any way connected to the Sites: (i) content of
                an illegal nature (including content that violates any third-party’s
                intellectual property rights); or (ii) pirated software (or software
                sites), content that facilitates “hacking” or “cracking.” You may not
                obtain, or attempt to obtain, any materials or information through any
                means not intentionally made available through the Sites.
              </p>
              <p>
                Cove reserves the right, in its sole and exclusive discretion, to
                immediately suspend or terminate the account(s) of and/or any and all
                access to the Sites for any customer or user of the Sites who violates any
                provision of these Terms of Sale. You expressly understand and agree that
                violation of the above may result in termination of your access and/or
                account and a breach of any agreement you have with Cove, including a
                Retail Installment Agreement, along with a termination of all Services,
                without refund of any fees or other amounts paid by you to Cove.
              </p>
            </li>
            <li>
              <strong>Personal Non-Commercial Use Limitation</strong>. Unless
              otherwise specified, the Sites are for your personal and non-commercial
              use. You may not modify, copy, distribute, transmit, display, perform,
              reproduce, publish, license, create derivative works from, transfer, or
              sell any content, information, software, Products, or Services obtained
              from the Sites.
            </li>
            <li>
                <strong>Copyrights and Trademarks</strong>. All of the materials and
                content appearing on the Sites are either owned, licensed or sub-licensed
                (including, without limitation, through these Terms of Sale) to Cove and
                are used by Cove in accordance with the applicable licenses and laws. You
                may not copy, distribute, or otherwise disseminate any materials or content
                (including any logos, images, or data) from the Sites or otherwise use in
                any manner inconsistent with the exclusive rights of the copyright or
                trademark holder, unless you are the owner of said materials or content or
                have express written permission from the owner of said materials. All
                rights not expressly licensed to you under these Terms of Sale or other
                applicable terms and conditions are expressly reserved by Cove, or, if
                applicable, by the owner of such rights.
            </li>
            </ol>
            <p>
                40. <strong><u>App Stores</u></strong>. You acknowledge and agree that the
                availability of the Applications is dependent on the third-party websites
                from which you download the Applications, e.g. the App Store from Apple or
                the Android app market from Google (each, an “App Store”). You acknowledge
                that these Terms of Sale are between you and Cove and not with an App
                Store. Each App Store may have its own terms and conditions to which you
                must agree before downloading the Applications from it, including the
                Applications. You agree to comply with, and your license to use the
                Applications is conditioned upon your compliance with, such App Store terms
                and conditions. To the extent such other terms and conditions from such App
                Store are less restrictive than, or otherwise conflict with, these Terms of
                Sale, the more restrictive or conflicting terms and conditions in these
                Terms of Sale apply. Cove will not charge you any additional fees for you
                to receive and download the Applications; however, your wireless service
                provider may charge a fee for air-time or data usage associated therewith.
                Check with your wireless carrier if you have questions about your wireless
                plan.
            </p>
            <p>
                41. <strong><u>Data; Data Storage</u></strong>. You agree to permit Cove to
                track and retain personal information, demographic information, Product and
                monitoring usage statistics and related information for Cove’s internal
                marketing, demographic, and usage studies, so Cove can improve,
                personalize, and customize the Products and Services Cove provides to you
                and to Cove’s other customers and to better meet your needs and enhance
                your experience in using the Products and Services. All of your information
                and data received by Cove shall be maintained confidentially by Cove. Cove
                may delete any data delivered to us when (i) any storage period that
                applies to your account expires, (ii) you or Cove terminates your Service
                Plan, (iii) you deliver a written request to Cove, or (iv) when Cove
                chooses to do so at its sole discretion and such deletion is not prohibited
                by any applicable law, regulation, regulatory authority or other applicable
                judicial or governmental order. Notwithstanding anything contained herein
                to the contrary, Cove is not responsible for any change to or loss of any
                data.
            </p>
            <p>
                42. <strong><u>Right to Subcontract</u></strong>. As referenced above,
                Monitoring Services, if purchased by you, of your System may be provided by
                a third party independent contractor Monitoring Company. Cove may also, in
                its sole discretion, subcontract for the provision of any of the Services
                under these Terms of Sale. The provisions of these Terms of Sale inure to
                the benefit of and are applicable to (i) any subcontractor of Cove engaged
                to provide any of the Products or Services to you, including the Monitoring
                Services provided by the Monitoring Company at its central station
                (collectively, “Subcontractors”); and (ii) Cove and each of its affiliates,
                directors, officers, members, shareholders, employees, agents and
                representatives (each together with Subcontractors, a “Cove Party” and
                collectively, the “Cove Parties”), and bind you to all such persons or
                entities listed in the foregoing subsection (i) and (ii) with the same
                force and effect as they bind you to Cove. Any Subcontractor we engage is
                an independent contractor and not our partner, affiliate, or joint venture.
                You authorize Cove to act as your agent for purposes of working with, or
                providing any directions to, any Subcontractors with respect to the
                provision of the Services, including but not limited to Monitoring
                Services. You authorize Cove to share your personal information with Cove’s
                subcontractors or other authorized third parties for the purpose of
                providing Services to you under these Terms of Sale.
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
                43. <strong><u>Assignment</u></strong>. You may not assign your rights or
                obligations under these Terms of Sale. Cove shall have the right to assign
                these Terms of Sale to any other person, firm or corporation without notice
                to you and upon such assignment shall have no further obligation hereunder.
                You acknowledge that these Terms of Sale, and particularly those Sections
                hereof relating to Cove’s disclaimer of warranties, maximum liability,
                limitation of liability, and third-party indemnification limitation on
                lawsuits, venue, and waiver of jury trial and class action, inure to the
                benefit of, are applicable to, and fully enforceable by, any assignees
                and/or Subcontractors of Cove, and these Sections bind you with respect to
                said assignees and/or Subcontractors with the same force and effect the
                Sections bind you to Cove.
            </p>
            <p>
                44. <strong><u>Account, Password, and Security</u></strong>. When you
                register for the Sites, you will create a password to access certain
                materials on the Sites, including your personal customer account. You are
                entirely responsible for maintaining the confidentiality of your password
                and account. Furthermore, you are solely responsible for any and all
                activities that occur under your account. You agree to immediately notify
                Cove of any unauthorized use of your account or any other breach of
                security. Cove will not be liable for any loss that you may incur as a
                result of someone else using your account or password, either with or
                without your knowledge. However, you may be held liable for losses incurred
                by Cove or a third party due to someone else using your account or
                password. You may not use any account that is registered to another person
                at any time without the permission of the account holder. By creating an
                account, you agree that you will provide only true and correct information
                to us about yourself and that you will not create an account for or on
                behalf of anyone else, unless legally authorized to do so, and that you
                will not use any pretext or deception to create an account, not in your own
                name or that would appear to be the account of another person. You agree
                that you will not use any pretext or deception to access or attempt to
                access the account of any other person.
            </p>
            <p>
                45. <strong><u>Insurance</u></strong>.
            </p>
            <p>
                COVE’S CHARGES FOR ITS PRODUCTS AND SERVICES ARE BASED SOLELY ON THE VALUE
                OF THE PRODUCTS AND SERVICES PROVIDED AND ARE NOT INSURANCE PREMIUMS NOR
                ARE THEY RELATED TO THE VALUE OF PROPERTY LOCATED ON OR NEAR YOUR PREMISES.
                YOU ACKNOWLEDGE AND AGREE THAT COVE IS NOT AN INSURER AND SHALL NOT PROVIDE
                INSURANCE COVERAGE AGAINST ANY LOSSES, AS DEFINED BELOW. TO THE EXTENT YOU
                WISH TO HAVE ANY INSURANCE COVERAGE FOR LOSSES AS DEFINED BELOW, IT IS YOUR
                RESPONSIBILITY TO PROCURE AND MAINTAIN SEPARATE INSURANCE POLICIES FROM AN
                INSURANCE COMPANY OR COMPANIES, SOLELY AT YOUR COST AND EXPENSE, COVERING
                ALL LOSS, DAMAGE OR EXPENSE (COLLECTIVELY “LOSSES”), INCLUDING ALL PROPERTY
                DAMAGE, PERSONAL INJURY (INCLUDING DEATH), ECONOMIC LOSSES OR ANY OTHER
                FORM OF LOSS, DAMAGE OR EXPENSE ARISING OUT OF OR IN CONNECTION WITH, DUE
                TO, OR CAUSED IN WHOLE OR IN PART BY (I) THESE TERMS OF SALE, OR A RETAIL
                INSTALLMENT AGREEMENT, IF APPLICABLE, INCLUDING ANY BREACH OF ANY
                REPRESENTATION, WARRANTY, COVENANT OR OBLIGATION ARISING
                HEREUNDER/THEREUNDER; (II) THE SYSTEM; (III) THE SERVICES; (IV) THE ACTIVE
                OR PASSIVE SOLE, JOINT OR SEVERAL NEGLIGENCE OF ANY KIND OR DEGREE OF YOU
                OR ANY COVE PARTY (AS DEFINED BELOW); (V) THE IMPROPER OPERATION OR
                NON-OPERATION OF THE SYSTEM; (VI) BREACH OF CONTRACT, EXPRESS OR IMPLIED,
                WHICH OCCURS BEFORE OR AFTER YOUR ACCEPTANCE OF THESE TERMS OF SALE OR
                EXECUTION OF A RETAIL INSTALLMENT AGREEMENT, IF APPLICABLE; (VII) BREACH OF
                WARRANTY, EXPRESS OR IMPLIED; (VIII) PRODUCT OR STRICT LIABILITY; (IX) THE
                LOSS OR DAMAGE TO OR MALFUNCTION OF PRODUCTS, SERVICES, OR FACILITIES
                NECESSARY TO OPERATE THE SYSTEM, TRANSMIT ANY SIGNAL TO OR RECEIVE SIGNALS
                AT THE MONITORING COMPANY’S CENTRAL STATION; (X) A CLAIM FOR SUBROGATION,
                INDEMNIFICATION OR CONTRIBUTION; (XI) A VIOLATION OF ANY APPLICABLE
                CONSUMER PROTECTION LAW OR ANY OTHER THEORY OF LIABILITY OR ALLEGED FAULT
                ON THE PART OF ANY COVE PARTY; (XII) A VIOLATION OF ANY LAW PROHIBITING THE
                INTERCEPTION OF ORAL COMMUNICATIONS BY ELECTRONIC MEANS; (XIII) THE ACTION
                OF ANY THIRD PARTY IN RESPONDING TO A SIGNAL FROM THE SYSTEM, OR (XIV) ANY
                UNAUTHORIZED ACCESS, USE OR DISCLOSURE OF YOUR PERSONAL INFORMATION
                (COLLECTIVELY, THE “COVERED CLAIMS”), RECOVERY FOR ANY LOSSES, AS DEFINED
                IN THIS SECTION, SHALL BE LIMITED TO THE INSURANCE YOU PURCHASE SEPARATELY
                FROM AN INSURANCE COMPANY, IF ANY.
            </p>
            <p>
                46. <strong>
                    <u>
                        Limitation of Liability Regarding Use of Products and Services and
                        Release
                    </u>
                </strong>
                . BY AGREEING TO THESE TERMS OF SALE AND/OR A RETAIL INSTALLMENT AGREEMENT,
                IF APPLICABLE, YOU ARE RELEASING COVE, ITS AFFILIATES, DIRECTORS, OFFICERS,
                SHAREHOLDERS, EMPLOYEES, SUBCONTRACTORS, AGENTS AND REPRESENTATIVES,
                INCLUDING BUT NOT LIMITED TO THE MONITORING COMPANY (COLLECTIVELY, THE
                “COVE PARTIES”) ON YOUR BEHALF AND ON BEHALF OF ALL OTHERS WHO MAKE CLAIMS
                UNDER THESE TERMS OF SALE AND/OR A RETAIL INSTALLMENT AGREEMENT, IF
                APPLICABLE, FROM ALL LIABILITY ARISING OUT OF OR IN CONNECTION WITH, DUE
                TO, OR CAUSED IN WHOLE OR IN PART BY ANY COVERED CLAIM (AS DEFINED ABOVE).
                UNDER NO CIRCUMSTANCES WILL COVE BE RESPONSIBLE OR LIABLE TO YOU FOR
                CONSEQUENTIAL OR INCIDENTAL DAMAGES INCLUDING WITHOUT LIMITATION, DAMAGES
                FOR PERSONAL INJURY, DEATH OR DAMAGES TO PROPERTY RELATING TO OR ARISING
                OUT OF YOUR USE OF THE PRODUCTS AND/OR SERVICES. NOTWITHSTANDING THE
                FOREGOING, EVEN IF ANY COVE PARTY IS FOUND LIABLE FOR ANY LOSSES (AS
                DEFINED ABOVE), ANY SUCH LIABILITY SHALL BE LIMITED TO THE LESSER OF THE
                AMOUNT PAID BY YOU FOR THE PRODUCTS AND SERVICES AND THE SUM OF $2,000.00
                (WHICH AMOUNT REPRESENTS THE AGGREGATE MAXIMUM AMOUNT COVE MAY BE HELD
                LIABLE UNDER THESE TERMS OF SALE AND/OR A RETAIL INSTALLMENT AGREEMENT, IF
                APPLICABLE). THIS LIMITATION IS CUMULATIVE AND WILL NOT BE INCREASED BY THE
                EXISTENCE OF MORE THAN ONE INCIDENT OR CLAIM. COVE DISCLAIMS ALL LIABILITY
                OF ANY KIND OF COVE’S LICENSORS AND SUPPLIERS. COVE AND YOU ACKNOWLEDGE AND
                AGREE IT IS IMPRACTICAL AND EXTREMELY DIFFICULT TO DETERMINE THE ACTUAL
                DAMAGES, IF ANY, THAT MAY RESULT FROM A FAILURE BY COVE TO PERFORM ANY OF
                ITS OBLIGATIONS. THIS AGREED-UPON AMOUNT IS NOT A PENALTY, AND IS THE SOLE
            REMEDY YOU HAVE AGAINST COVE RELATING TO THE PRODUCTS AND SERVICES.    <strong><u></u></strong>
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
                THE LIMITATION OF DAMAGES SET FORTH ABOVE IS A FUNDAMENTAL ELEMENT OF THE
                BASIS OF THE BARGAIN BETWEEN YOU AND COVE AND REFLECTS AN ALLOCATION OF
                RISK BETWEEN YOU AND COVE, TOGETHER WITH THE OTHER COVE PARTIES (INCLUDING
                THE RISK THAT A CONTRACT REMEDY MAY FAIL OF ITS ESSENTIAL PURPOSE AND CAUSE
                CONSEQUENTIAL LOSS). NONE OF THE PRODUCTS OR SERVICES WOULD BE PROVIDED TO
                YOU WITHOUT SUCH LIMITATIONS.
            </p>
            <p>
                <strong><u></u></strong>
            </p>
            <p>
                BY PURCHASING FROM COVE, YOU ACKNOWLEDGE THAT YOU HAVE HAD AN OPPORTUNITY
                TO REVIEW COVE’S WARRANTY TERMS, HAVE DONE SO TO THE DEGREE YOU FEEL YOU
                NEED TO BE FAMILIAR WITH THEM, AND YOU ACCEPT THEIR TERMS AND CONDITIONS,
                INCLUDING THE LIMITATIONS, EXCLUSIONS, AND DISCLAIMERS. SOME STATES DO NOT
                ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES,
            SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.    <strong><u></u></strong>
            </p>
            <p>
                47. <strong><u>No Warranties for Products and Services</u></strong>. THE
                PRODUCTS AND SERVICES ARE PROVIDED FOR YOUR CONVENIENCE, “AS IS” AND “AS
                AVAILABLE”, AND COVE AND ITS LICENSORS AND SUPPLIERS EXPRESSLY DISCLAIM ANY
                WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                INCLUDING THE WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, ACCURACY AND NON-INFRINGEMENT.
            </p>
            <p>
                COVE MAKES NO REPRESENTATION OR WARRANTY THAT: (1) THE PRODUCTS OR SERVICES
                MAY NOT BE COMPROMISED OR CIRCUMVENTED, (2) THE PRODUCTS OR SERVICES WILL
                PREVENT ANY PERSONAL INJURY OR PROPERTY LOSS; OR (3) THAT THE PRODUCT OR
                SERVICES WILL PROVIDE ADEQUATE WARNING OR PROTECTION. COVE’S PRODUCTS AND
                SERVICES DO NOT CAUSE AND CANNOT ELIMINATE OCCURRENCES OF THE EVENTS THEY
                ARE INTENDED TO DETECT OR AVERT, INCLUDING, BUT NOT LIMITED TO, BURGLARIES,
                ROBBERIES, FIRES, FLOODS, AND MEDICAL PROBLEMS. YOU UNDERSTAND THAT A
                PROPERLY INSTALLED AND MAINTAINED ALARM SYSTEM OR PROPERLY OPERATING
                MEDICAL DEVICE MAY ONLY REDUCE THE RISK OF A BURGLARY, ROBBERY, FIRE,
                HEALTH CARE RESPONSE OR OTHER EVENTS OCCURRING WITHOUT PROVIDING AN ALARM
                SYSTEM, LIFE SAFETY SYSTEM OR MEDICAL DEVICE, BUT IT IS NOT INSURANCE OR A
                GUARANTEE THAT THE PRODUCTS AND SERVICES PURCHASED WILL DETECT OR AVERT
                SUCH INCIDENTS OR THEIR CONSEQUENCES, OR THAT THERE WILL BE NO PERSONAL
                INJURY OR PROPERTY LOSS AS A RESULT.
            </p>
            <p>
                YOU AGREE THAT BY USING THE PRODUCTS AND SERVICES, COVE DOES NOT UNDERTAKE
                ANY RISK THAT YOU OR YOUR PROPERTY, OR THE PERSON OR PROPERTY OF OTHERS,
                MAY BE SUBJECT TO INJURY OR LOSS IF SUCH AN EVENT OCCURS. YOU AGREE THE
                ALLOCATION OF SUCH RISK REMAINS WITH YOU, NOT COVE. BY USING THE PRODUCTS
                AND/OR SERVICES, YOU RELEASE, WAIVE, DISCHARGE AND PROMISE NOT TO SUE OR
                BRING ANY CLAIM OF ANY TYPE AGAINST COVE FOR LOSS, DAMAGE OR INJURY
                RELATING IN ANY WAY TO THE PRODUCTS OR SERVICES PROVIDED BY COVE.
            </p>
            <p>
                IN NO EVENT SHALL COVE OR ANY OTHER COVE PARTY, BE LIABLE FOR ANY DIRECT,
                INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR ANY DAMAGES
                WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR
                PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE
                OF THE PRODUCTS AND SERVICES, WITH THE DELAY OR INABILITY TO USE THE
                PRODUCTS OR RELATED SERVICES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE,
                STRICT LIABILITY, OR OTHERWISE, EVEN IF THE COVE PARTIES HAVE BEEN ADVISED
                OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES AND/OR JURISDICTIONS DO
                NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR DIRECT,
                CONSEQUENTIAL, OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO
                YOU. IF YOU ARE DISSATISFIED WITH ANY ITEM OR PORTION OF THE PRODUCTS OR
                SERVICES, OR WITH ANY PART OF THESE TERMS OF SALE, YOUR SOLE AND EXCLUSIVE
                REMEDY IS TO DISCONTINUE USING THE PRODUCTS AND SERVICES.
            </p>
            <p>
                NEITHER COVE NOR ANY OTHER COVE PARTY REPRESENTS THAT THE PRODUCTS AND
                SERVICES MAY NOT BE COMPROMISED OR CIRCUMVENTED; THAT THE PRODUCTS AND
                SERVICES WILL PREVENT ANY PERSONAL INJURY OR PROPERTY LOSS; OR THAT THE
                PRODUCTS AND SERVICES WILL IN ALL CASES PROVIDE ADEQUATE WARNING OR
                PROTECTION. YOU UNDERSTAND THAT USE OF THE PRODUCTS AND/OR SERVICES MAY BE
                INTERRUPTED, CIRCUMVENTED, UNAVAILABLE (FOR A LIMITED OR EXTENDED TIME
                PERIOD) OR OTHERWISE COMPROMISED, INCLUDING AS A RESULT OF EQUIPMENT
                DESIGNED OR USED BY A THIRD PARTY FOR THE PURPOSE OF CAUSING FALSE ALARMS
                OR GAINING UNAUTHORIZED ACCESS TO OR OTHERWISE AFFECTING OR CONTROLLING THE
                PRODUCTS AND SERVICES (INCLUDING ANY CAMERA).
            </p>
            <p>
                48. <strong>
                    <u>
                        Disclaimer of Warranties and Limitation of Liability Regarding Use
                        of or Transmissions of Information or Data to or from the Sites.
                    </u>
                </strong>
            </p>
            <p>
                THE INFORMATION, SOFTWARE, CONTENT, AND SERVICES INCLUDED IN OR AVAILABLE
                THROUGH THE SITES ARE PROVIDED AS-IS AND MAY INCLUDE INACCURACIES, DEFECTS
                OR TYPOGRAPHICAL ERRORS. CHANGES MAY BE MADE TO THE SITES FROM TIME TO TIME
                AND TO THE INFORMATION CONTAINED THEREIN. COVE AND/OR ITS AUTHORIZED
                CONTRACTORS OR AFFILIATES MAY MAKE IMPROVEMENTS AND/OR CHANGES TO THE SITES
                AT ANY TIME.
            </p>
            <p>
                THE COVE PARTIES DO NOT MAKE ANY REPRESENTATIONS ABOUT THE SUITABILITY,
                RELIABILITY, AVAILABILITY, TIMELINESS, LACK OF VIRUSES OR OTHER HARMFUL
                COMPONENTS, ACCURACY OF THE CONTENT, SOFTWARE, AND RELATED GRAPHICS OR
                INFORMATION CONTAINED WITHIN THE SITES FOR ANY PURPOSE. ALL SUCH
                INFORMATION, SOFTWARE, AND RELATED GRAPHICS OR INFORMATION ARE PROVIDED “AS
                IS” WITHOUT WARRANTY OF ANY KIND. THE COVE PARTIES HEREBY DISCLAIM ALL
                WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE,
                SERVICES, AND RELATED GRAPHICS OR INFORMATION, INCLUDING ALL IMPLIED
                WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, WORKMANLIKE EFFORT, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p>
                COVE AND THE OTHER COVE PARTIES TAKE SECURITY SERIOUSLY AND CARE ABOUT THE
                INTEGRITY OF YOUR PERSONAL INFORMATION. ALTHOUGH WE USE COMMERCIALLY
                REASONABLE PHYSICAL, ADMINISTRATIVE, AND TECHNOLOGICAL METHODS WITH REGARD
                TO THE TRANSMISSION OF DATA USING THE SITES, INCLUDING HTTPS, TLS/SSL
                PROTOCOL, AES AND RSA DATA ENCRYPTION, COVE CANNOT, HOWEVER, GUARANTEE THAT
                UNAUTHORIZED THIRD PARTIES WILL NEVER BE ABLE TO DEFEAT OUR SECURITY
                MEASURES OR USE YOUR PERSONAL INFORMATION FOR IMPROPER PURPOSES. IN THE
                EVENT THAT ANY INFORMATION UNDER OUR CONTROL IS COMPROMISED AS A RESULT OF
                BREACH OF SECURITY, COVE WILL TAKE REASONABLE STEPS TO INVESTIGATE THE
                SITUATION AND WHERE APPROPRIATE, NOTIFY THOSE INDIVIDUALS WHOSE INFORMATION
                MAY HAVE BEEN COMPROMISED AND TAKE OTHER STEPS, IN ACCORDANCE WITH ANY
                APPLICABLE LAWS AND REGULATIONS.
            </p>
            <p>
                YOU SPECIFICALLY AGREE THAT NO COVE PARTY SHALL BE RESPONSIBLE FOR
                UNAUTHORIZED ACCESS TO, OR ALTERATION OR USE OF, YOUR TRANSMISSIONS OF
                PERSONAL INFORMATION OR DATA, ANY MATERIAL, OR DATA SENT OR RECEIVED (OR
                NOT SENT OR RECEIVED), OR ANY TRANSACTIONS ENTERED INTO THROUGH THE SITES.
                YOU EXPRESSLY AGREE THAT COVE IS NOT RESPONSIBLE FOR ANY CONTENT SENT USING
                AND/OR INCLUDED IN THE SITES BY ANY THIRD PARTY.
            </p>
            <p>
            49.    <strong><u>Release of Insured Losses; Waiver of Subrogation</u></strong>.
                You release Cove for all Losses covered by your insurance policies and for
                all insurance deductibles. You also waive and release any subrogation and
                other rights you or your insurance company may have against Cove for money
                paid to you on your behalf.
            </p>
            <p>
                50. <strong><u>Indemnification</u></strong>. You agree to indemnify and
                hold Cove and any Cove Party, and the respective successors, and assigns of
                each, harmless from any claim, demand, or damage, including reasonable
                attorneys’ fees, asserted by any third party due to, or arising out of,
                your use of the Products, Services or Sites and/or any information (text or
                graphical), software, or products obtained through the Sites, Products or
                Services and/or from Cove. IF ANYONE OTHER THAN YOU (INCLUDING YOUR
                INSURANCE COMPANY) ASKS ANY COVE PARTY TO PAY FOR ANY LOSSES (AS DEFINED
                ABOVE), INCLUDING ANY ATTORNEYS’ FEES, ARISING OUT OF OR IN CONNECTION
                WITH, DUE TO, OR CAUSED IN WHOLE OR IN PART BY ANY COVERED CLAIM (AS
                DEFINED ABOVE), INCLUDING THE ACTIVE OR PASSIVE SOLE, JOINT OR SEVERAL
                NEGLIGENCE OF ANY KIND OR DEGREE OF YOU OR ANY COVE PARTY, YOU SHALL
                INDEMNIFY, DEFEND AND HOLD SUCH COVE PARTY HARMLESS (WITHOUT ANY CONDITION
                THAT ANY OF THEM FIRST PAY), FOR ALL LOSSES (AS DEFINED ABOVE), INCLUDING
                ATTORNEYS’ FEES, ASSERTED AGAINST OR INCURRED BY SUCH COVE PARTY. THE
                FOREGOING INDEMNIFICATION OBLIGATIONS MAY NOT BE ENFORCEABLE IN SOME
                STATES, SO SUCH OBLIGATIONS MAY NOT APPLY TO YOU.
            </p>
            <p>
                51. <strong><u>Dispute Resolution</u></strong>. You and Cove each agree
                that if you are in default, including a material breach of any of your
                obligations under these Terms of Sale or a Retail Installment Agreement, if
                applicable, or if you have any claims against Cove, any other Cove Party
                that may arise out of these Terms of Sale, a Retail Installment Agreement,
                if applicable, or out of the relationship between you and Cove, including
                but not limited to disputes as to these Terms of Sale, the Sites license,
                Sites access restriction and/or termination, Cove’s trademarks, copyrights,
                patents, trade secrets, trade dress and other intellectual property rights;
                privacy, the Services, Products, Monitoring Services or a Retail
                Installment Agreement, if applicable, or disclaimer of warranties (each a
                “Claim” or collectively, “Claims”), then each of you and Cove shall give
                written notice to the other of any default or Claim and a period of fifteen
                (15) days to cure such default or Claim from the date such notice is
                provided, unless a longer period is mutually agreed upon by you and Cove
                (the “Cure Period”). If a breach, default or Claim is not cured within the
                Cure Period, then you or Cove (and/or the relevant Cove Party) agree to
                pursue any and all Claims or disputes against the other for default (i) in
                small claims court for any claim or dispute the alleged value of which is
                equal to or less than the jurisdictional maximum for small claims court in
                the relevant jurisdiction; or (ii) in court before a judge in a bench trial
                for all claims and disputes which have an alleged value in excess of the
                jurisdiction maximum for small claims court in the relevant jurisdiction.
            </p>
            <ol type="a">
              <li>
                <p>
                  <strong>Jury Trial Waiver</strong>. Unless otherwise prohibited by law,
                  COVE, ALL OTHER COVE PARTIES, AND YOU EACH WAIVE ANY RIGHT TO A JURY TRIAL.
                </p>
              </li>
              <li>
                <p>
                  <strong>Class Action Waiver</strong>. Unless otherwise prohibited by
                  law, COVE, ALL OTHER COVE PARTIES, AND YOU EACH AGREE THAT ANY PROCEEDINGS
                  WHETHER IN SMALL CLAIMS COURT OR IN COURT BEFORE A JUDGE, WILL BE CONDUCTED
                  ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS OR REPRESENTATIVE ACTION.
                </p>
              </li>
            </ol>
            <p>
                52. <strong><u>Time Limitation on Actions</u></strong>. All Claims,
                disputes, actions, or proceedings against Cove must be commenced in small
                claims court or court, as applicable, under the Dispute Resolution
                provision above, within one (1) year after the cause of action or the basis
                for the Claims or disputes has accrued, without judicial extension of time,
                or such Claim, dispute, action or proceeding is barred, except where
                prohibited by law. The time period in this Section must be complied with
                strictly.
            </p>
            <p>
                53. <strong><u>Miscellaneous.</u></strong>
            </p>
            <p>
                <strong></strong>
            </p>
            <ol type="a">
              <li>
                <p>
                <strong>Severability/No waiver.</strong> If any part of these Terms of
                Sale is determined to be invalid or unenforceable pursuant to applicable
                law including, without limitation, the warranty disclaimers and liability
                limitations set forth above, then the invalid or unenforceable provision
                will be deemed superseded by the valid and enforceable provision that is
                the closest match to the intent of the original provision and the remainder
                of these Terms of Sale shall remain in effect. No waiver of any of the
                terms of these Terms of Sale will be valid unless in writing and designated
                as such. No failure or delay in enforcing your or Cove’s rights shall be
                construed as a waiver.
                </p>
              </li>
              <li>
                <p>
                <strong>English language version controllin</strong>g. It is the express
                will of you and Cove that these Terms of Sale be prepared in English. In
                the event that these Terms of Sale are translated into another language or
                otherwise reprinted, this English language version of these Terms of Sale
                (as amended) shall govern if any inconsistencies from such translation
                arise.
                </p>
              </li>
              <li>
                <p>
                <strong>Entire agreement</strong>. Unless otherwise specified herein or
                in a writing executed by the Parties, these Terms of Sale, Cove’s Privacy
                Policy, and any agreement or addendum you enter into with Cove, including a
                Retail Installment Agreement, if applicable, and all related documents
                constitute the entire agreement between you (the user) and Cove with
                respect to the use of Sites, the Products and Services. These Terms of Sale
                supersede all prior or contemporaneous communications and proposals,
                whether electronic, oral or written, between you and Cove with respect to
                the Products and Services.
                </p>
              </li>
              <li>
                <p>
                <strong>
                    Cove’s right to change these Terms of Sale as it deems reasonable or
                    necessary; Notices
                </strong>
                . Cove reserves the right to change these Terms of Sale as it deems
                reasonable and appropriate without notice to you. Any changes to these
                Terms of Sale are effective as soon as such changes are posted to one or
                more of Cove’s Sites. The date of the most recent changes to these Terms of
                Sale are listed at the beginning of this document. Cove encourages you to
                use its Sites to verify the date that these Terms of Sale were last updated
                whenever you contact Cove’s Sites to determine whether or not changes have
                been made. Cove may, from time to time, post notices on one or more of its
                Sites if Cove believes, in its sole discretion, that it has made material
                changes to these Terms of Sale.
                </p>
              </li>
              <li>
                <p>
                <strong>Applicable law/Jurisdiction and venue</strong>. You and Cove
                agree that all Products and Services you purchase shall be deemed to be
                provided by Cove solely based in Utah. You and Cove further agree that all
                Claims and disputes against Cove or any other Cove Party and any disputes
                that may relate to or arise out of these Terms of Sale, a Retail
                Installment Agreement, if applicable, or out of the relationship between
                you and Cove, shall be governed by the internal laws of the State of Utah,
                without regard to choice of law principles. Subject to applicable law of
                the Jurisdiction in which your Premises are located, you and Cove also
                agree that all Claims will be brought in accordance with the Dispute
                Resolution provisions of these Terms of Sale in the Federal, State, or
                local small claims, courts located in Salt Lake County, Utah, and you
                hereby irrevocably submit to the exclusive personal jurisdiction of such
                courts for such purpose.
                </p>
              </li>
              <li>
                <p>
                <strong>Internet content not guaranteed to remain confidential.</strong>
                Cove takes reasonable and industry standard measures to protect information
                transmitted via the Internet. However, please remember that transmissions
                on the Internet are not always confidential even if Cove and you take
                protective measures. If you are transmitting confidential information, you
                are doing so at your own risk. If your payment information is hacked or
                otherwise comprised during any payment transaction with us, then please
                contact your bank to address the issue given that it is solely in
                possession of the merchant data used in connection with any and all
                transactions.
                </p>
              </li>
              <li>
                <p>
                <strong>Customer service.</strong> If you have any questions, comments,
                or concerns, please contact Cove’s customer support department during
                normal business hours Monday through Friday Mountain Standard time via
                phone at 855-268-3669, or email at    <a href="mailto:support@covesmart.com">support@covesmart.com</a>.
                </p>
              </li>
            </ol>
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
