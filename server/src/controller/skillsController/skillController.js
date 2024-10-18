import { Skill, PreferredSkill } from "./skillSchema.js";

class skillController {
  static async createSkills(req, res) {
    const { id } = req.user;
    const { title, description } = req.body;
    try {
      const newSkill = new Skill({
        title: title,
        description: description,
        user_id: id,
      });
      await newSkill.save();
      return res.status(201).json({ message: "Skill created successfully" });
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }
  static async getSkillById(req, res) {
    const user = req.user;
    const { id } = req.params;
    try {
      const skills = await Skill.find({ user_id: user.userId, _id: id });
      if (!skills) {
        return res.status(404).json({ message: "Skill not found" });
      }

      return res.status(200).json(skills);
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }
  static async updateSkills(req, res) {
    const user = req.user;
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const skills = await Skill.findOneAndUpdate(
        { user_id: user.userId, _id: id },
        { title: title, description: description },
        { new: true }
      );
      if (!skills) {
        return res.status(404).json({ message: "Skill not found" });
      }
      return res.status(200).json({ message: "Skill updated successfully" });
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }

  static async deleteSkills(req, res) {
    const { id } = req.params;
    const user = req.user;
    try {
      const skills = await Skill({ user_id: user.userId, _id: id });
      if (!skills) {
        return res.status(404).json({ message: "Skill not found" });
      }
      await Skill.deleteOne({ user_id: user.userId, _id: id });
      return res
        .status(200)
        .json({ message: "Skill deleted successfully", skills: skills });
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }
  static async createPreferdSkills(req, res) {
    const { id } = req.user;
    const { title } = req.body;
    try {
      const newPreferredSkill = new PreferredSkill({
        preferredSkill: {
          title: title,
          user_id: id,
        },
      });
      await newPreferredSkill.save();
      return res
        .status(201)
        .json({ message: "Preferred skill created successfully" });
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }
}

export default skillController;
