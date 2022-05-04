import apps from './app';
import 'dotenv/config';

const port = process.env.PORT;
apps.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

