// -------------------------------
// REPLACE THESE WITH YOUR SUPABASE CREDENTIALS
// -------------------------------
const supabaseUrl = 'https://YOUR_PROJECT.supabase.co';
const supabaseKey = 'YOUR_ANON_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function goToResults() {
    const id = document.getElementById("participantId").value.trim();

    if (!id) {
        alert("Please enter your ID");
        return;
    }

    try {
        const { data, error } = await supabase
            .from('users')
            .select('id')
            .eq('id', id)
            .single();

        if (error || !data) {
            alert("ID not found. Please check your participant ID.");
            return;
        }

        window.location.href = "results.html?id=" + id;

    } catch (err) {
        console.error(err);
        alert("An error occurred while checking your ID. Please try again.");
    }
}
