function Home({ dark }) {

    return (
        <>
            <div className={dark ? 'home dark' : 'home light'}>

                <h1>Hello world</h1>
            </div>
        </>
    )
}

export default Home