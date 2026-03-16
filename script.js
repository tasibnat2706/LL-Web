// -------------------------------
// REPLACE THESE WITH YOUR SUPABASE CREDENTIALS
// -------------------------------
const supabaseUrl = 'https://qhagmocximrpcnyrchgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYWdtb2N4aW1ycGNueXJjaGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2OTAyNTYsImV4cCI6MjA4OTI2NjI1Nn0.rNfgLWuK2TV-v2xrT_AESFvM4AvwHqss7PUlw28ZRaU';
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
