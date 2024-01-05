import { Request, Response } from 'express';
import {
  handleClientError,
  handleLibraryError,
} from '../../utils/error/error.util';
import { Classmate, Me } from '../../utils/types';
import { studentService } from './student.service';

export const studentController = {
  getMyInfo: async (req: Request, res: Response) => {
    const { myId } = req.params;

    try {
      const student: Me | null = await studentService.getMyInfo(Number(myId));

      if (!student)
        return handleClientError(500, 'Could not find student.', res);

      return res.status(200).json({ student });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },

  getClassmate: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const student: Classmate | null = await studentService.getClassmate(
        Number(id)
      );

      if (!student)
        return handleClientError(500, 'Could not find student.', res);

      return res.status(200).json({ student });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },

  getAllClassmates: async (req: Request, res: Response) => {
    const { myId } = req.params;

    try {
      const students: Classmate[] | null =
        await studentService.getAllClassmates(Number(myId));

      if (!students)
        return handleClientError(500, 'Could not find student.', res);

      return res.status(200).json({ students });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },
};
