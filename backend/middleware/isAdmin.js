// to allow only admin users on certain routes

const isAdmin = (req, res, next) => {
    if(req.user && req.user.role=="admin") {
        next();    // allow access
    }
    else {
        return res.status(403).json({ message : "Forbidden: Admins only" });
    }
};

module.exports = isAdmin;