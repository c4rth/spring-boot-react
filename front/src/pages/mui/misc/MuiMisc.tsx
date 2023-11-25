import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Chip, Divider, IconButton, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { MultipleSelect } from '../../../components/MultipleSelect';
import { ColorShowcase } from './ColorShowcase';
import { useGlobalLoading } from "../../../components/GlobalLoading";

export const MuiMisc = () => {
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);

  const teams = [
    'Australia Blue Bottles',
    'Australia Tortoises',
    'Australia Goats',
    'Australia Cardinals',
    'Australia Pinks',
    'Australia Pink Jackets',
    'Australia Pink Legs',
    'Australia United',
    'Australia Athletic',
    'Pink Blue Bottles',
    'Pink Tortoises',
    'Pink Goats',
    'Pink Cardinals',
    'Brown Blue Bottles',
    'Brown Tortoises',
    'Brown Goats',
    'Brown Cardinals',
    'Slimy Blue Bottles',
    'Slimy Tortoises',
    'Slimy Goats',
    'Slimy Cardinals',
    'Cute Blue Bottles',
    'Cute Tortoises',
    'Cute Goats',
    'Cute Cardinals',
  ];

  function onCloseMultipleSelect(selected: string[]) {
    setSelectedTeams(selected);
  }

  const [errorInput, setErrorInput] = useState(false);
  const [helperText, setHelperText] = useState("Input 5 characters max");

  function onHandleInput(value: string) {
    if (value.length > 5) {
      setErrorInput(true);
      setHelperText("Invalid input: max 5 characters");
    } else {
      setErrorInput(false);
      setHelperText("Input 5 characters max")
    }
  }

  const handleDeleteChip = () => {
    console.info('You clicked the delete icon.');
  };

  const { showLoading, hideLoading } = useGlobalLoading();

  const handleLoadingOpen = () => {
    showLoading();
  };
  const handleLoadingClose = () => {
    hideLoading();
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example in TypeScript
        </Typography>

        <Divider color="primary" sx={{ width: '100%' }} />

        <Button color="primary" variant="contained" sx={{ mt: 3 }}>Text</Button>
        <Button color="primary" variant="text">Text</Button>
        <Button color="secondary" variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Divider sx={{ width: '100%' }} />

        <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }} alignItems='center'>
          <TextField fullWidth label="fullWidth" id="fullWidth" sx={{ marginRight: '1em' }} />
          <IconButton sx={{ borderRadius: 1, border: "1px solid" }}><DeleteIcon /></IconButton>
        </Stack>

        <Divider sx={{ width: '100%' }} />

        <TextField error={errorInput} label="Validation" helperText={helperText} onChange={(e) => onHandleInput(e.target.value)} />

        <Divider sx={{ width: '100%' }} />

        <MultipleSelect label="Teams" names={teams} onClose={onCloseMultipleSelect} />
        <Stack direction="row" spacing={1} flexWrap='wrap'>
          {selectedTeams.map((team) =>
            <Chip label={team} variant="filled" color='primary' size="small" onDelete={handleDeleteChip} />
          )}
        </Stack>

        <Divider sx={{ width: '100%' }} />

        <Stack alignItems='center' direction="row" spacing={1}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" sx={{ backgroundColor: 'primary.light' }}>Primary.light</Button>
          <Button variant="contained" sx={{ backgroundColor: 'primary.dark' }}>Primary.dark</Button>
        </Stack>

        <ColorShowcase title="Default tonal offset" color="primary" />

        <Divider sx={{ width: '100%' }} />

        <Button variant="contained" color="primary" onClick={handleLoadingOpen}>Loading Open</Button>
        <Button variant="contained" color="primary" onClick={handleLoadingClose}>Loading Close</Button>

        <Typography variant='h1'>Heading 1</Typography>
        <Typography variant='h2'>Heading 2</Typography>
        <Typography variant='h3'>Heading 3</Typography>
        <Typography variant='h4'>Heading 4</Typography>
        <Typography variant='h5'>Heading 5</Typography>
        <Typography variant='h6'>Heading 6</Typography>
      </Stack>
    </Container >
  );
}
