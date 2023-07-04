import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Activity } from '../Activity';

export default function FreeSolo() {
  return (
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={Activity.map((option) => option.request_id)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment>
                  {" "}
                  <IconButton>
                    {" "}
                    <SearchIcon />{" "}
                  </IconButton>{" "}
                </InputAdornment>
              ),
            }}
          />
        )}
      />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
