
const authorise = (req, res, next) => {
    const { user } = req.query
    if (user === '007'){
        req.user = {name : 'James', id: '007'};
        console.log('Authorised')
        console.log(req.user)
        next();
    } else {
        console.log(`Unauthorised. User is : ${user}.`);
        res.status(401).send('Unauthorised !')
    }
}

module.exports = authorise;
