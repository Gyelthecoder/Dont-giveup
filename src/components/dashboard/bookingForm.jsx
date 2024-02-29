import React, { useState } from 'react'
import { bookHall } from '../../services/bookingServices';
const BookingForm = () => {
    const [formData, setFormData] = useState({
        hallName : '',
        data: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.name})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await bookHall(formData)

            setFormData({
                hallName: '',
                date: '',
            });
            alert("Hall booked successfully")
        }catch(error){
            console.error('Booking failed:', error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="hallName"
                placeholder='Hall Name'
                value={formData.hallName}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <button type='submit'>Book Hall</button>
        </form>
    )
}

export default BookingForm