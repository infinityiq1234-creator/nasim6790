const content = require('../models/content');

exports.addContent = async (req, res) => {
    try {
        const { name, price } = req.body; 
        const newCourse = new content({ name, price });
        await newCourse.save();
        res.json(newCourse);
    } catch (err) {
        console.error(err); 
        res.json({ error: "Server error" });
    }
};

exports.viewContent = async (req, res) => {
    try {
        const allCourses = await content.find();
        res.json(allCourses);
    } catch (err) {
        console.error(err); 
        res.json({ error: "Server error" });
    }
};

exports.viewoneContent = async (req, res) => {
    try {
        const singleCourse = await content.findById(req.params.id);
        if (!singleCourse) {
            return res.json({ message: "Course not found" });
        }
        res.json(singleCourse);
    } catch (err) {
        console.error(err); 
        res.json({ error: "Server error" });
    }
};

exports.updateContent = async (req, res) => {
    try {
        const { name, price } = req.body; 
        const updatedCourse = await content.findByIdAndUpdate(req.params.id, { name, price }, { new: true });
        res.json(updatedCourse);
    } catch (err) {
        console.error(err); 
        res.json({ error: "Server error" });
    }
};

exports.deleteoneContent = async (req, res) => {
    try {
        await content.deleteMany(req.params.price);
        res.json({ message: "course delete successfully" });
    } catch (err) {
        console.error(err); 
        res.json({ error: "Server error" });
    }
};