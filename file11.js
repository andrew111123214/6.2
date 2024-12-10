let loading = false;
        let timeout;
        document.getElementById('startButton').addEventListener('click', () => {
            loading = true;
            document.getElementById('message').textContent = 'Загрузка начата...';

            timeout = setTimeout(() => {
                if (loading) {
                    document.getElementById('message').textContent = 'Загрузка завершена!';
                }
            }, 3000);
        });
        document.getElementById('stopButton').addEventListener('click', () => {
            if (loading) {
                clearTimeout(timeout);
                loading = false;
                document.getElementById('message').textContent = 'Загрузка остановлена.';
            }
        });