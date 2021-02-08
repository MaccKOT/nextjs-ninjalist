//list of paths that have to be rendered to HTML at build time
//https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  //creating of array of paths with params
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <style jsx>
        {`
          span {
            color: #95a5a6;
            fontsize: 0.9rem;
          }
        `}
      </style>

      <h1>{ninja.name}</h1>
      <p>
        <span>Email</span>: {ninja.email}
      </p>
      <p>
        <span>Company</span>: {ninja.company.name}
      </p>
      <p>
        <span>Web</span>: {ninja.website}
      </p>
      <p>
        <span>Address</span>: {ninja?.address?.city}
      </p>
      <p>
        <span>Phone</span>: {ninja?.phone}
      </p>
    </div>
  );
};

export default Details;
