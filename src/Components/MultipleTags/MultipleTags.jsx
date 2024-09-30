import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function() {
  return (
    <Stack spacing={1} >
      <Autocomplete
        multiple
        id="tags-outlined"
        options={tags}
        getOptionLabel={(option) => option}
        defaultValue={[tags[6]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tags"
            placeholder=""
          />
        )}
      />
    </Stack>
  );
}

const tags = ["Food","Lifestyle", "Travel", "Adventure", "Business", "Tour", "Jewellery"]
