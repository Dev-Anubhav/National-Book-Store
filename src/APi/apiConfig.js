const key = import.meta.env.VITE_APP_URL
export const bookAPIConfig = 
{ 
    trendingBooks: key + '/book/trendingbooks', 
recommendedBooks: key + '/book/recommended',
topAuthor: key + '/book/top_authors',
findBooks: key + '/book/findbook',
searchBooks: key + '/book/search',
signUp: key + '/auth/signup',
chatbot: key + '/book/chatbot',
publisher: key + '/book/top_publisher'
}
