const getWithTimeout = (url, options = {}, timeout = 5000) => {
    const controller = new AbortController();
    const { signal } = controller;
    setTimeout(() => controller.abort(), timeout);

    return fetch(url, { ...options, signal });
};

const getPostWithComments = async () => {
    try {
        // Fetch the post with ID 50
        const postResponse = await getWithTimeout("https://jsonplaceholder.typicode.com/posts/50");
        const post = await postResponse.json();

        // Fetch comments associated with post ID 50
        const commentsResponse = await getWithTimeout("https://jsonplaceholder.typicode.com/posts/50/comments");
        const comments = await commentsResponse.json();

        // Merge comments into the post data
        post.comments = comments;

        // Log the merged data to the console
        console.log("Post with Comments:", post);
    } catch (error) {
        console.error("Error fetching post or comments:", error);
    }
};

// Call the function to fetch the post and its comments
getPostWithComments();
