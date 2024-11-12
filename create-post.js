const createPost = async () => {
    // Define the post data
    const postData = {
        title: "Sample Post",
        body: "This is the body of the post. It contains more than twenty characters.",
        userId: 1
    };

    // Add an "excerpt" key with the first 20 characters from the "body"
    postData.excerpt = postData.body.substring(0, 20);

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        const result = await response.json();
        console.log("New post created:", result);
    } catch (error) {
        console.error("Error creating post:", error);
    }
};

// Call the function to create a new post
createPost();
