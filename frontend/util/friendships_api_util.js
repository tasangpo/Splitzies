export const addFriend = friendship => {
    return $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: { friendship }
    })
}
    
    
export const removeFriend = friendId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/friendships/${friendId}`
    })
};