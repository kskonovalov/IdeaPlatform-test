import formatDate from "./formatDate";

describe("formatDate", () => {
  it("formats a valid date in DD.MM.YY format correctly", () => {
    const input = "12.05.18";
    const output = formatDate(input);
    expect(output).toBe("12 май 2018, Сб");
  });

  it('returns "-" for invalid dates', () => {
    const invalidDate = "32.13.20"; // Invalid date
    const output = formatDate(invalidDate);
    expect(output).toBe("-");
  });
});
