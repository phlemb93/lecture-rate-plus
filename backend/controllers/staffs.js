
export const getSingleStaff = (req, res) => {
    const { staffId } = req.user;
    const { id } = req.params;

    if(id == staffId) {
        res.status(200).json("I am a staff with id of " + staffId)
    } else {
        res.status(404).json("You're not authorized")
    }
}

export const updateStaff = (req, res) => {
    
}


export const deleteStaff = (req, res) => {
    
}