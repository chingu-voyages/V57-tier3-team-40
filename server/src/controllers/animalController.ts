import { Request, Response } from "express";
import { animalService } from "../services";
import { AnimalFilterParams, AnimalFilterType } from "../types";

export const animalController = {
  async getAllAnimals(req: Request, res: Response): Promise<void> {
    try {
      const filters: AnimalFilterParams = {};

      if (req.query.type) {
        const typeQuery = req.query.type as string;
        filters.type = typeQuery.includes(',')
          ? typeQuery.split(',').map(t => t.trim() as AnimalFilterType)
          : typeQuery as AnimalFilterType;
      }

      if (req.query.breed) {
        const breedQuery = req.query.breed as string;
        filters.breed = breedQuery.includes(',')
          ? breedQuery.split(',').map(b => b.trim())
          : breedQuery;
      }

      if (req.query.gender) {
        const genderQuery = req.query.gender as string;
        filters.gender = genderQuery.includes(',')
          ? genderQuery.split(',').map(g => g.trim())
          : genderQuery;
      }

      if (req.query.age) {
        const ageQuery = req.query.age as string;
        filters.age = ageQuery.includes(',')
          ? ageQuery.split(',').map(a => a.trim())
          : ageQuery;
      }

      if (req.query.ageMin) {
        filters.ageMin = parseInt(req.query.ageMin as string, 10);
      }

      if (req.query.ageMax) {
        filters.ageMax = parseInt(req.query.ageMax as string, 10);
      }

      if (req.query.goodWith) {
        const goodWithQuery = req.query.goodWith as string;
        filters.goodWith = goodWithQuery.includes(',')
          ? goodWithQuery.split(',').map(g => g.trim())
          : goodWithQuery;
      }

      const animals = await animalService.getAllAnimals(filters);
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
