export function formatDate(timestamp) {
    // Ambil _seconds dari timestamp
    const date = new Date(timestamp); // Konversi detik ke milidetik

    // Format tanggal
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("id-ID", options); // Atau gunakan "id-ID" untuk format Indonesia
}
