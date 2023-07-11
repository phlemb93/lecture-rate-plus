
export const getSingleStudent = (req, res) => {

    const { studentId } = req.user;
    const { id } = req.params;

    console.log(id)
    console.log(studentId)

    if(id == studentId) {
        res.status(200).json("I am a student with id of " + studentId)
    } else {
        res.status(404).json("You're not authorized")
    }
}

export const updateStudent = (req, res) => {
    
}


export const deleteStudent = (req, res) => {
    
}