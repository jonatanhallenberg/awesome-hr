import { Schema, model } from 'mongoose';

export interface ITimeLog {
    start: Date,
    end: Date
}

const timeLogSchema = new Schema<ITimeLog>({
    start: { type: Date, required: true },
    end: { type: Date, required: true }
});

const TimeLogModel = model("timelog", timeLogSchema);

export default TimeLogModel;