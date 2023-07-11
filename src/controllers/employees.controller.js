import {  pool } from '../db.js'

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM EMPLOYEE')
        res.send(rows)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const [rows] = await pool.query('SELECT * FROM EMPLOYEE WHERE id = ?', [id])
        if(rows.length === 0) return res.status(404).json({message: 'Employee not found'})
        res.send(rows)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createEmployee = async (req, res) => {
    try {
        const {name, salary} = req.body;
        const [rows] = await pool.query('INSERT INTO EMPLOYEE (name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const [rows] = await pool.query('DELETE FROM EMPLOYEE WHERE id = ?', [id])
        if(rows.affectedRows <= 0) return res.status(404).json({message: 'Employee not delete. Cause not found'})
        res.sendStatus(204)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, salary} = req.body;
        const [rows] = await pool.query('UPDATE EMPLOYEE SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
        if(rows.affectedRows <= 0) return res.status(404).json({message: 'Employee not update. Cause not found'})
        res.status(200).json({id, name, salary})
    } catch (error) {
        res.status(500).send(error)
    }
}

