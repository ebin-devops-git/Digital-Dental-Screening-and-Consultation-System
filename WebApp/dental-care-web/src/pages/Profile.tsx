<Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
  <DialogTitle>Contact Options</DialogTitle>

  <DialogContent>
    {selectedClinic?.contact?.phone && (
      <Button
        fullWidth
        sx={{ mb: 1 }}
        variant="outlined"
        onClick={() => window.open(`tel:${selectedClinic.contact.phone}`)}
      >
        📞 Call {selectedClinic.contact.phone}
      </Button>
    )}

    {selectedClinic?.contact?.email && (
      <Button
        fullWidth
        sx={{ mb: 1 }}
        variant="outlined"
        onClick={() => window.open(`mailto:${selectedClinic.contact.email}`)}
      >
        ✉️ Email {selectedClinic.contact.email}
      </Button>
    )}

    {selectedClinic?.contact?.website && (
      <Button
        fullWidth
        sx={{ mb: 1 }}
        variant="outlined"
        onClick={() =>
          window.open(
            selectedClinic.contact.website.startsWith("http")
              ? selectedClinic.contact.website
              : `https://${selectedClinic.contact.website}`
          )
        }
      >
        🌐 Visit Website
      </Button>
    )}
  </DialogContent>

  <DialogActions>
    <Button onClick={() => setModalOpen(false)}>Close</Button>
  </DialogActions>
</Dialog>