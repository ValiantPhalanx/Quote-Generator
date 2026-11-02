import { useState } from "react";
import QuoteCard from "./QuoteCard";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getData() {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://dummyjson.com/quotes/random"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const result = await response.json();

            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <QuoteCard
                loading={loading}
                error={error}
                data={data}
            />

            <button onClick={getData} disabled={loading} className="generate-quote-btn">
                Generate Quote
            </button>
        </div>
    );
}

export default App;