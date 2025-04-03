import {Router} from 'express';
import {createUser, getParticularUser, getUsers, updateData,deleteUser} from "../controllers/userContoller";

const router=Router();

router.post("/create",createUser);
router.get("/",getUsers);
router.get("/getParticularUser/:id",getParticularUser);
router.put("/updateData/:id",updateData);
router.delete("/deleteUser/:id",deleteUser)

export default router;