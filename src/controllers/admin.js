import Admin from '../models/Admins';
import Firebase from '../helper/firebase';


//get all admins 

export const getAllAdmins = async (req, res) => {
    try {
        const allAdmins = await Admin.find({});
        return res.status(200).json({
            message: 'All admins found',
            data: allAdmins,
            error: false,
        });
    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: undefined,
            error: true
        });
    }
};

//delete admin

export const deleteAdmin = async (req,res) => {
    try {
        const adminDeleted = await Admin.findByIdAndDelete(req.params.id);
        if(!adminDeleted) {
            return res.status(404).json({
                message: 'Admin not found',
                data: undefined,
                error: true,
            });
        }
        return res.status(200).json({
            message: 'Admin deleted',
            data: adminDeleted,
            error: false,
        });
    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: undefined,
            error: true,
        });
    }
};

//create Admin 

export const createAdmin = async (req, res) => {
    let firebaseUid;
    try {
        const newFirebaseUser = await Firebase.auth().createUser({
            email: req.body.email,
            password: req.body.password,
        });
        await Firebase.auth().setCustomUserClaims(newFirebaseUser.uid, { role: 'Admin' });
        const newAdmin = new Admin({
            firebaseUid: newFirebaseUser.uid,
            firsName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        });
        await newAdmin.save();
        return res.status(201).json({
            message: 'New Admin created',
            data: newAdmin,
            error: false
        })
    } catch (error) {
        if(firebaseUid) {
            await Firebase.default.auth().deleteUser(firebaseUid);
        }
        return res.status(400).json({
            message: 'There was an error',
            data: undefined,
            error: true,
        });
    }
};

//Update admin

export const updateAdmin = async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        )

        if(!updatedAdmin) {
            return res.status(404).json({
                message: 'Admin not found',
                data: undefined,
                error: true,
            });
        }
        return res.status(200).json({
            message: 'Admin updated',
            data: updatedAdmin,
            error: false,
        });
    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: undefined,
            error: true,
        });
    }
};

// Get admin by id 

export const findAdminById = async (req, res) => {
    try {
        const adminById =  await Admin.findById(req.params.id);
        if(!adminById) {
            return res.status(404).json({
                message: 'Admin not found',
                data: undefined,
                error: true,
            });
        }
        return res.status(200).json({
            message: 'Admin found',
            data: adminById,
            error: false,
        });
    } catch (error) {
        return res.status(400).json({
            message: 'There was an error',
            data: undefined,
            error: true,
        });
    }
};


