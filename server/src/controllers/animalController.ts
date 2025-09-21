import { Request, Response } from "express";
import { animalService } from "../services";

export const animalController = {
  async getAllAnimals(req: Request, res: Response): Promise<void> {
    try {
      const animals = await animalService.getAllAnimals();
      res.json(animals);
    } catch (error) {
      console.error("Error getting all animals:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async getAnimalById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const animal = await animalService.getAnimalById(id);

      if (!animal) {
        res.status(404).json({ error: "Animal not found" });
        return;
      }

      res.json(animal);
    } catch (error) {
      console.error("Error getting animal by id:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async createAnimal(req: Request, res: Response): Promise<void> {
    try {
      const animalData = req.body;
      const animal = await animalService.createAnimal(animalData);
      res.status(201).json(animal);
    } catch (error) {
      console.error("Error creating animal:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async updateAnimal(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const animalData = req.body;
      const animal = await animalService.updateAnimal(id, animalData);

      if (!animal) {
        res.status(404).json({ error: "Animal not found" });
        return;
      }

      res.json(animal);
    } catch (error) {
      console.error("Error updating animal:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async deleteAnimal(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleted = await animalService.deleteAnimal(id);

      if (!deleted) {
        res.status(404).json({ error: "Animal not found" });
        return;
      }

      res.status(200).json({ message: "Animal deleted successfully" });
    } catch (error) {
      console.error("Error deleting animal:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
