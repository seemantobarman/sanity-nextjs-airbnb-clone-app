import Head from "next/head";
import { sanityClient } from "../sanity";

export const getServerSideProps = async () => {
    const query = '*[ _type == "property"]';
    const properties = await sanityClient.fetch(query);

    if (!properties.length) {
        return {
            props: {
                properties: [],
            },
        };
    } else {
        return {
            props: {
                properties,
            },
        };
    }
};

const Home = ({ properties }) => {
    console.log(properties);
    return (
        <>
            <Head>
                <title>Sanity Nextjs App</title>
            </Head>
            <h1>Hello World</h1>
        </>
    );
};

export default Home;
