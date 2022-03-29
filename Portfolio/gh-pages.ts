import pages from "gh-pages";

pages.publish(
    "public", // path to public directory
    {
        branch: "main",
        repo: "https://github.com/raineio/portfolio.git",
        user: {
            name: "raineio",
            email: "raine.stablum@gmail.com"
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)