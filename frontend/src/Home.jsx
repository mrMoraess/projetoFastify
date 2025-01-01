

function Home() {
    const name = "Matheus";

    if (name) {
        return (
            <div>
                Initial project by {name}
            </div>
        );
    } else {
        return (
            <div>
                Initial project by MR21Forever
            </div>
        );
    }

}

export default Home;