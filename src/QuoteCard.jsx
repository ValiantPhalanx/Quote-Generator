function QuoteCard({loading, error, data }) {
    return (    
        <div className="quote-card">
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            
            {data && !loading && (
                <>
                    <h2 className="quote">
                        {data.quote}
                    </h2>

                    <p className="author">
                        -{data.author}
                    </p>
                </>
            )}
        </div>     
    )
}

export default QuoteCard;