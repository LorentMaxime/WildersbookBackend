import { Request, Response } from 'express';

import WilderModel from '../models/Wilder';

const wilderController = {
  create: async (req: Request, res: Response) => {
    //console.log(req.body);
    try {
      await WilderModel.init();
      const wilder = new WilderModel(req.body);
      const result = await wilder.save();
      res.status(201).json({ success: true, result });
    } catch (err: unknown) {
      res.status(400).json({ success: false, result: err });
    }
  },

  read: async (req: Request, res: Response) => {
    try {
      await WilderModel.init();
      const result = await WilderModel.find();
      res.json({ success: true, result: result });
    } catch (err) {
      res.json({ success: false, result: err });
    }
  },

  updateOne: async (req: Request, res: Response) => {
    const idWilder = req.params.id;
    console.log(req.body);
    try {
      const result = await WilderModel.updateOne(
        { _id: idWilder },
        { ...req.body }
      );
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error update the wilder informations');
    }
  },

  deleteById: async (req: Request, res: Response) => {
    const _id = req.params.id;
    try {
      const result = await WilderModel.findByIdAndDelete(_id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).send('Error deleting the wilder');
    }
  },
};

export default wilderController;
