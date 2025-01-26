export function formatDate(timestamp, withDay = true) {
    // Ambil _seconds dari timestamp
    const date = new Date(timestamp); // Konversi detik ke milidetik

    let options;
    // Format tanggal
    if (withDay) {
        options = { year: "numeric", month: "long", day: "numeric" };
    } else {
        options = { year: "numeric", month: "long" };
    }
    return date.toLocaleDateString("id-ID", options); // Atau gunakan "id-ID" untuk format Indonesia
}
