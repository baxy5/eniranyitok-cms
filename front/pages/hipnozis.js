import React from 'react'

const Hipnozis = ({data}) => {
  return (
    <div>{data.attributes.title}</div>
  )
}

export async function getServerSideProps() {
    const [about, mainTiles, hipnosis] = await Promise.all([
      fetch(process.env.NEXT_PUBLIC_ABOUT_API),
      fetch(process.env.NEXT_PUBLIC_HOME_API),
      fetch(process.env.NEXT_PUBLIC_HIPNOSIS_API)
    ]);
  
    const aboutDataJSON = await about.json();
    const mainTilesDataJSON = await mainTiles.json();
    const hipnosisDataJSON = await hipnosis.json()
    const aboutData = await aboutDataJSON.data.attributes.AboutSection[0];
    const mainTilesData = await mainTilesDataJSON.data.attributes.HomeTiles[0];
    const hipnosisData = await hipnosisDataJSON.data.attributes;
  
    return {
      props: {
        aboutData,
        mainTilesData,
        hipnosisData
      },
    };
}

export default Hipnozis