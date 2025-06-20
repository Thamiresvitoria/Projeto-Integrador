const input = document.getElementById('imagem');
  const preview = document.getElementById('preview');

  input.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        preview.setAttribute('src', this.result);
        preview.style.display = 'block';
      });

      reader.readAsDataURL(file);
    } else {
      preview.style.display = 'none';
    }
  });

<script>
  const input = document.getElementById('imagem');
  const preview = document.getElementById('preview');
  const remover = document.getElementById('remover');

  input.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        preview.setAttribute('src', this.result);
        preview.style.display = 'block';
        remover.style.display = 'inline';
      });

      reader.readAsDataURL(file);
    }
  });

  remover.addEventListener('click', function() {
    preview.setAttribute('src', '#');
    preview.style.display = 'none';
    remover.style.display = 'none';
    input.value = '';  // Limpa o input
  });
</script>
