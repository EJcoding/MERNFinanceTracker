import { useUser } from "@clerk/clerk-react";
import { FinanceRecordForm } from "./finance-record-form";
import { FinanceRecordList } from "./finance-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";
export const Dashboard = () => {
    const { user } = useUser();
    const { records } = useFinancialRecords();

    const totalMonthly = useMemo (() => {
        let totalAmount = 0;
        records.forEach((record) => {
            totalAmount += record.amount;
        });

        return totalAmount;
    }, [records]);

    return (
        <div className="dashboard-container">
            <h1> Welcome {user?.firstName}! Here are your Finances:</h1>
            <FinanceRecordForm />
            <div>Total Monthly: ${totalMonthly}</div>
            <FinanceRecordList />
        </div>
    );
};