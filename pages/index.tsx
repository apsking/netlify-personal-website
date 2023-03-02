import Header from '../components/Header'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Header title="Hi, my name is Alex." />
        <p>
          I love writing beautiful code and using technology to make our lives easier, more productive, and more enjoyable.
        </p>
        <p>
          I'm a life-long student, a software engineer by trade, and a
          tinkerer at heart. I have a full-stack background and have worked
          at places like Microsoft and Amazon.
          Check out my <a href="https://www.linkedin.com/in/apsking/">LinkedIn</a> for
          a little more about me.
        </p>
        <p>
          Most recently, I have been interested in building voice applications
          on AWS and Amazon Alexa. I was one of the first developers to integrate
          <a href="https://www.amazon.com/Alexander-King-My-Pet-Rock/dp/B073VDPTCW"> Alexa's
          in-skill purchasing</a> and really love how that opens the market
          for voice applications. I've tinkered with things like the smarthome automation
          using AWS IoT, keeping up with the latest JS frameworks, trying to
          harness the AWS CDK to maximize its potential, and much more.
        </p>
        <p>
          Check out my projects <a href='/projects'>here.</a>
        </p>
        
    </Layout>
  )
}
