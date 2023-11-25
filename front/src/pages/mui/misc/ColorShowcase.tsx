import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

export function ColorShowcase({ title, color }: { title: string; color: string; }) {
  return (
    <Stack gap={1} alignItems="center">
      <span>
        <b>{title}</b>
      </span>
      <Stack direction="row" gap={1}>
        <Stack alignItems="center">
          <Typography variant="body2">light</Typography>
          <Box sx={{ bgcolor: `${color}.light`, width: 40, height: 20 }} />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="body2">main</Typography>
          <Box sx={{ bgcolor: `${color}.main`, width: 40, height: 20 }} />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="body2">dark</Typography>
          <Box sx={{ bgcolor: `${color}.dark`, width: 40, height: 20 }} />
        </Stack>
      </Stack>
    </Stack>
  );
}
