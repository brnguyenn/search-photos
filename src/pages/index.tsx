import { useState, useMemo } from "react";
import { Autocomplete, Box, Pagination, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Table from "../components/Table";
import { usePhotos } from "../hooks";

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const { photos, pageCount, loading, error } = usePhotos({
    searchString: searchQuery,
    page: page,
  });

  const handleRequestSearch = () => {
    setSearchQuery(input);
    setPage(1);
  };

  const tableRows = useMemo(
    () =>
      photos?.map((photo) => ({
        rowId: photo.id,
        rowItems: [
          photo.id,
          photo.title,
          <Box sx={{ ":hover": { cursor: "pointer" }, display: "flex" }}>
            <img src={photo.thumbnailUrl} alt={photo.title} loading="lazy" />
          </Box>,
        ],
      })),
    [photos]
  );

  return (
    <Stack spacing={4} sx={{ alignContent: "center", display: "flex" }}>
      <Autocomplete
        id="photo-search-bar"
        options={[]}
        freeSolo
        onInputChange={(_event, newInputValue) => {
          setInput(newInputValue);
        }}
        onChange={handleRequestSearch}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={"Search keywords on title"}
            margin="normal"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Stack direction={"row-reverse"}>
                  {params.InputProps.endAdornment}
                  <IconButton size="small" onClick={handleRequestSearch}>
                    <SearchIcon />
                  </IconButton>
                </Stack>
              ),
            }}
          />
        )}
      />

      {loading && <Box sx={{ alignSelf: "center" }}>...Loading</Box>}
      {error && <Box sx={{ alignSelf: "center" }}>Error!!</Box>}

      {photos && photos?.length > 0 ? (
        <>
          <Table headers={["ID", "Title", "Thumbnail"]} rows={tableRows} />
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_event, value) => setPage(value)}
            sx={{ alignSelf: "end" }}
            showFirstButton
            showLastButton
          />
        </>
      ) : (
        !loading &&
        !error && <Box sx={{ alignSelf: "center" }}>No results found</Box>
      )}
    </Stack>
  );
};

export default IndexPage;
