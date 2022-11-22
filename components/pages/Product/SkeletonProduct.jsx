import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {Box} from "@mui/material";

const SkeletonProduct = () => {
    return (
        <Stack spacing={2} sx={{margin:1}}>
            <Skeleton variant="rectangular" width={350} height={240}/>
            <Box sx={{       display: 'flex',
                flexDirection: 'row',gap: 1}}>
                <Skeleton variant="rectangular" width={170} height={160}/>
                <Box>
                    <Skeleton variant="rectangular" width={150} height={50}/>
                    <Skeleton sx={{marginTop: 5}} variant="rounded" width={170} height={50} />
                </Box>
            </Box>
            <Box sx={{display: 'flex', gap: 2}}>
                <Skeleton variant="rounded" width={170} height={40} />
                <Skeleton variant="rounded" width={170} height={40} />
            </Box>
        </Stack>
    );
};

export default SkeletonProduct;
