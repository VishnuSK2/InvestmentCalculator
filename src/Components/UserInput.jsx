function UserInput({ onChange, input }) {
    return (
        <section id="user-input" className="shadow rounded-4 p-4 mt-3 border">
            <div className="input-group p-1 ">
                <p>
                    <label className="fs-6">Initial Investment</label>
                    <input
                        type="number"
                        className="rounded-3 shadow"
                        placeholder="e.g., 10,000"
                        required
                        value={input.initialInvestment}
                        onChange={(event) => onChange("initialInvestment", event.target.value)}
                    />
                </p>
                <p>
                    <label className="fs-6">Annual Investment</label>
                    <input
                        type="number"
                        className="rounded-3 shadow"
                        required
                        placeholder="e.g., 1,200 per year"
                        value={input.annualInvestment}
                        onChange={(event) => onChange("annualInvestment", event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label className="fs-6">Rate (%) </label>
                    <input
                        type="number"
                        className="rounded-3 shadow"
                        required
                        placeholder="e.g., 7"
                        value={input.expectedReturn}
                        onChange={(event) => onChange("expectedReturn", event.target.value)}
                    />
                </p>
                <p>
                    <label className="fs-6">Duration</label>
                    <input
                        type="number"
                        className="rounded-3 shadow"
                        required
                        placeholder="e.g., 10"
                        value={input.duration}
                        onChange={(event) => onChange("duration", event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}

export default UserInput;
