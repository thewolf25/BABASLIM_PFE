package com.babaslim.app.service;

import com.babaslim.app.service.dto.StockDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.babaslim.app.domain.Stock}.
 */
public interface StockService {
    /**
     * Save a stock.
     *
     * @param stockDTO the entity to save.
     * @return the persisted entity.
     */
    StockDTO save(StockDTO stockDTO);

    /**
     * Partially updates a stock.
     *
     * @param stockDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<StockDTO> partialUpdate(StockDTO stockDTO);

    /**
     * Get all the stocks.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<StockDTO> findAll(Pageable pageable);

    /**
     * Get the "id" stock.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<StockDTO> findOne(Long id);

    /**
     * Delete the "id" stock.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
