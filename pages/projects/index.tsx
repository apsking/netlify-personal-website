import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { ReactNode } from 'react';

type Project = {
  title: string,
  body: ReactNode
}

const projects: Project[] = [
  {
    title: '🦍 Gorilla 🦍',
    body: (
      <>
        <p>
          <b>Stop monkeying around and write better scripts</b>
        </p>
        <p>
        <a href='https://github.com/apsking/gorilla'>Gorilla</a> is a blazing fast, TypeScript build tool for creating better
        GreaseMonkey scripts. It handles the complex build chain, so you don't have to. Find it
        on <a href='https://www.npmjs.com/package/gorilla-build'>NPM</a> as <b>gorilla-build</b>.
        </p>
      </>
    ),
  },
  {
    title: 'Alexa Skill - My Pet Rock 🪨',
    body: (
      <>
        <p>
          In <a href="https://www.amazon.com/Alexander-King-My-Pet-Rock/dp/B073VDPTCW" target="_blank" rel="noopener noreferrer">My Pet
          Rock</a>, you get to take care of your own pet. Take your new pet on walks, play games with it, and feed it regularly,
          so that it grows big and strong! Your pet will grow up over time to learn more skills and tricks. Join nearly than 500,000
          other people and see what it's all about!
        </p>
      </>
    ),
  },
  {
    title: 'Alexa Skill - Interview Prep 📈',
    body: (
      <>
        <p>
			    <a href="https://www.amazon.com/Alexander-King-Interview-Prep/dp/B01LW7L2VD" target="_blank"rel="noopener noreferrer">Interview
          Prep</a> is your one-stop skill to help you prepare for your next interview! It has hundreds of questions for a variety of
          different job types and areas of work. For best results, ask Interview Prep a few questions every day to prepare your answers.
          Consider answering directly into a mirror and focusing not only on your answer, but also your body language!
		    </p>
        <p>
          This skill was featured on <a href="https://lifehacker.com/how-to-use-alexa-to-help-you-prep-for-a-job-interview-1833024806">LifeHacker!</a>
        </p>
      </>
    ),
  },
  {
    title: 'Alexa Skill - Ancient Alchemy 🪄',
    body: (
      <p>
			  In <a href="https://www.amazon.com/Alexander-King-Ancient-Alchemy/dp/B074F4NHJ8" target="_blank"rel="noopener noreferrer">Ancient Alchemy</a>,
        you take on the challenge of restoring the Library of Elements by finding recipes for all of the elements in the realm. As The Alchemist,
        you start by combining primitive elements and then continue to use your findings to make many more! This creative journey will immerse you
        in its world and challenge your abilities!
		  </p>
    )
  }
];

export default function Projects() {
  const projectList = projects.map(({ title, body}, i) => (
    <div key={i}>
      <h2>{title}</h2>
      {body}
    </div>
  ));

  return (
    <Layout>
      <Header title="Projects" />
      <p>
        You can find most of my projects <a href='https://github.com/apsking'>on GitHub.</a>
      </p>
      <div>
        { projectList }
      </div>
    </Layout>
  )
}
