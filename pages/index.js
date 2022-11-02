import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const submitData = async (event) => {
  event.preventDefault();
  data = "";
  alert(`Donnée enregistré: ${event.target.name.value} et ${event.target.telephone.value} `);
  data += "${event.target.name.value}  ${event.target.telephone.value} /n";
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="E2065767 - Jean-paul Choi - Patrick Pierre - 420-5D2-MA Applications web 2" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <form action="/form" method="post" onSubmit="{submitData}">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="telephone">Telephone</label>
          <input type="text" id="telephone" name="telephone" required />

          <label htmlFor="message">Message</label>
          <p> {data} </p>

          <button type="submit">Enregistrer</button>
         </form>
      </main>

      <Footer />
    </div>
  )
}
