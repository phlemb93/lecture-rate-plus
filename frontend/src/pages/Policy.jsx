import React from 'react'

const About = () => {
  return (
    <main className="policy">
      <header>
        <h2>Privacy Policy</h2>
        <small>Last Updated: 16/09/2023</small>
      </header>

      <section className="body">

        <section className="one">
          <h3>Welcome to LectureRate+</h3>
          <p>This Privacy Policy outlines how we collect, use, disclose, and protect your personal data when you use our web app. Please read this policy carefully to understand our practices regarding your data and how we handle it. By accessing or using our web app, you agree to the terms outlined in this Privacy Policy.</p>
        </section>
        <section className="two">
          <h3>Information We Collect</h3>
          We may collect and process personal data that you provide directly to us. This could include your name, email address, and feedback content when you utilize our feedback submission feature.
        </section>

        <section className="three">
          <h3>How We Use Your Information</h3>
          <p>We use the information we gather from you to:</p>
          <ul>
            <li>Provide, maintain, and improve our web app's functionality.</li>
            <li>Process your feedback and provide necessary updates to lecturers.</li>
            <li>Communicate with you, including sending you important notifications and administrative messages.</li>
            <li>Respond to your queries and offer customer support.</li>
            <li>Monitor usage patterns and analyze trends to enhance user experience and improve our services.</li>
          </ul>
        </section>

        <section className="four">
          <h3>Disclosure of Your Information</h3>
          <p>We may share your personal data with:</p>
          <ul>
            <li>Lecturers to help them enhance their teaching methods</li>
            <li>Service providers who assist us with functions such as data processing and analytics.</li>
            <li>Law enforcement agencies, regulatory bodies, or legal advisors in case of legal requirements or disputes.</li>
          </ul>
        </section>

        <section className="five">
          <h3>Security</h3>
          <p>We take data security seriously. We employ industry-standard measures to protect your personal data. However, please be aware that no online platform can be completely secure.</p>
        </section>

        <section className="six">
          <h3>Your Rights</h3>
          <p>Under UK data protection laws, you have several rights concerning your personal data, including the right to access, rectify, and erase your data. You can also restrict or object to processing. </p>
        </section>

        <section className="seven">
          <h3>Cookies</h3>
          <p>We use cookies and similar technologies to enhance your user experience. By using our web app, you consent to the use of cookies in line with this Privacy Policy. You can manage your cookie preferences through your browser settings.</p>
        </section>

        <section className="eight">
          <h3>Children's Privacy</h3>
          <p>Our web app is not intended for users under the age of 13. We do not knowingly collect personal data from individuals under 13 years of age. If you believe a child has provided us with personal data, please contact us.</p>
        </section>

        <section className="nine">
          <h3>Changes to this Privacy Policy</h3>
          <p>We may update our Privacy Policy as required. Any changes will be reflected on this page, and the "Last Updated" date will be adjusted. Continued use of our web app after modifications implies your acceptance of these changes.</p>
        </section>

      </section>

    </main>
  )
}

export default About